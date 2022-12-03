const express = require("express");
const router = new express.Router();
const Job = require("../models/Job");
const userModel = require("../models/UserModel");
const util = require("util");
const asyncHandler = require("express-async-handler");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./uploads/files/proposals",
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${file.originalname}`);
  },
});

const uploadProposal = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(pdf|docx)$/i)) {
      return cb(new Error("Please upload an document"));
    }
    cb(null, true);
  },
  limits: {
    fileSize: 10024 * 1024 * 5,
  },
});

module.exports.addJob = async (req, res, next) => {
  try {
    const {
      title,
      sallary,
      description,
      skills,
      requirements,
      responsibilities,
      closeTime,
      sector,
    } = req.body;
    const job = new Job({
      title: title,
      sallary: sallary,
      description: description,
      skills: skills,
      requirements: requirements,
      responsibilities: responsibilities,
      closeDate: closeTime,
      company: req.user.userId,
      sector: sector,
    });
    job.save().then((result) => {
      return res.json({
        success: true,
        data: result,
      });
    });
  } catch (error) {
    return res.json({
      success: false,
      error: error,
      msg: "Something went wrong",
    });
  }
};

module.exports.getAllJobs = async (req, res, next) => {
  try {
    Job.find()
      .populate("company")
      .then((result) => {
        return res.json({
          success: true,
          data: result,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.json({
          success: false,
          msg: err,
        });
      });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      error: error,
      msg: error,
    });
  }
};

module.exports.getJob = async (req, res, next) => {
  try {
    // console.log(req);
    const job = await Job.findById(req.params.id).populate("company");
    return res.json({
      success: true,
      data: job,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      msg: error,
    });
  }
};

module.exports.submitProposal = async (req, res, next) => {
  uploadProposal.single("proposal")(req, res, async (err) => {
    if (err) {
      console.log(err);
      return res.status(300).json({
        success: false,
        msg: "Some Error Occured",
      });
    } else {
      return res.status(200).json({
        success: true,
        msg: "File Uploaded",
        file: req.file.path,
      });
    }
  });
};

module.exports.applyForJob = async (req, res, next) => {
  try {
    const job = req.body.jobId;
    const bid = req.body.bid;
    const user = req.user.userId;
    const appliedJob = await Job.findById(job);

    const appliedUser = await userModel.findById(user);
    console.log(appliedUser);

    const isApplyable = verifyNewApplicant(appliedJob, user);
    console.log("Status: ");
    console.log(isApplyable);
    if (!isApplyable) {
      console.log("Already Applied");

      return res.status(500).json({
        success: false,
        msg: "You have already applied for this job",
      });
    } else {
      console.log("Not Applied Yet");

      const proposal = req.body.proposal;
      console.log(appliedJob);
      appliedJob.applicants.push({
        applicant: user,
        status: "Under-Review",
        appliedDate: new Date(),
        proposal: proposal,
        bid: bid,
      });
      appliedUser.appliedJobs.push({
        job: appliedJob,
        status: "Under-Review",
        appliedDate: new Date(),
        proposal: proposal,
        bid: bid,
      });
      appliedJob.save();
      appliedUser.save();
      console.log("Successfully Applied");
      return res.status(200).json({
        success: true,
        msg: "You have applied for this job",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: error,
    });
  }
};

const verifyNewApplicant = (appliedJob, user) => {
  var isFine = true;
  try {
    appliedJob.applicants.every((applicant) => {
      const status = conditionChecker(applicant.applicant, user);
      if (!status) {
        isFine = false;
        throw "Break";
      } else {
        isFine = true;
      }
    });
  } catch (error) {
    if (error !== "Break") console.log(error);
  }
  return isFine;
};

const conditionChecker = (appliedJob, user) => {
  console.log(appliedJob);
  console.log(user);
  if (appliedJob.equals(user)) {
    return false;
  } else {
    return true;
  }
};

const getReusableJobDetail1 = async (job_id) => {
  const Jobs = await Job.findById(job_id).populate({
    path: "applicants",
    populate: {
      path: "applicant",
      model: "Users",
      select: "-appliedJobs -events -todos -favouriteJobs -savedJobs",
    },
  });

  return Jobs;
};

module.exports.getCompanyJobDetail = async (req, res, next) => {
  var op = [];

  try {
    const result = await Company.findById(req.query.user).select("jobs");
    //get details of all the jobs
    const jobArray = result["jobs"];
    for (job_id in jobArray) {
      const objId = jobArray[job_id];
      var dat = await getReusableJobDetail1(objId);
      op.push({ data: dat });
    }
    return res.json({
      success: true,
      data: op,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      error: error,
      msg: error,
    });
  }
};

module.exports.getCompanyJobDetailApp = async (req, res, next) => {
  var op = [];

  try {
    const result = await Company.findById(req.user.company).select("jobs");

    //get details of all the jobs
    const jobArray = result["jobs"];
    for (job_id in jobArray) {
      const objId = jobArray[job_id];
      var dat = await getReusableJobDetail1(objId);
      op.push({ data: dat });
    }
    return res.status(200).json({
      success: true,
      data: op,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error,
      msg: error,
    });
  }
};

module.exports.updateJobStatus = async (req, res, next) => {
  try {
    const { job_id, user_id, status } = req.body;
    const job = await Job.findById(job_id);
    const user = await userModel.findById(user_id);

    if (job.applicants) {
      job.applicants.forEach((applicant) => {
        if (applicant.applicant == user_id) {
          applicant.status = status;
          user.appliedJobs.forEach((appliedJob) => {
            if (appliedJob.job == job_id) {
              appliedJob.status = status;
            }
          });
        }
      });
    }
    job.save();
    user.save();
    return res.json({
      success: true,
      msg: "Job Status Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      msg: error,
    });
  }
};

module.exports.getAppliedJobs = asyncHandler(async (req, res, next) => {
  const usr = await req.user._id;
  var jobs = await userModel
    .findById(usr)
    .select("appliedJobs")
    .populate({
      path: "appliedJobs.job",
      populate: {
        path: "company",
      },
    });

  if (!jobs) {
    res.status(400).send("Applied Jobs not found");
  } else {
    res.status(200).send(jobs);
  }
});
module.exports.getSavedJobs = asyncHandler(async (req, res, next) => {
  const usr = await req.user._id;
  var jobs = await userModel
    .findById(usr)
    .select("savedJobs")
    .populate({
      path: "savedJobs.job",
      populate: {
        path: "company",
      },
    });

  if (!jobs) {
    res.status(400).send("Saved Jobs not found");
  } else {
    res.status(200).send(jobs);
  }
});

module.exports.getCompanyJobs = async (req, res, next) => {
  try {
    Job.find({ company: req.user.userId })
      .populate("company")
      .populate("applicants.applicant")
      .then((result) => {
        res.status(200).json({
          success: true,
          data: result,
        });
      });
  } catch (error) {
    return res.json({
      success: false,
      error: error,
      msg: error,
    });
  }
};

module.exports.getApplicants = async (req, res, next) => {
  try {
    Job.findById(req.params.id)
      .select("applicants")
      .populate("applicants.applicant")
      .then((result) => {
        console.log(result);
        res.status(200).json({
          success: true,
          data: result,
        });
      });
  } catch (error) {
    return res.json({
      success: false,
      error: error,
      msg: error,
    });
  }
};
