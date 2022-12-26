const express = require("express");
const router = new express.Router();
const Job = require("../models/Job");
const userModel = require("../models/UserModel");
const util = require("util");
const asyncHandler = require("express-async-handler");
const { BAD_REQUESTError, UnAuthenticatedError } = require("../errors/index");
const path = require("path");
const { StatusCodes } = require("http-status-codes");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Payment = require("../models/paymentModel");
module.exports.addJob = async (req, res, next) => {
  const {
    title,
    sallary,
    description,
    skills,
    requirments,
    responsibilities,
    closeTime,
    sector,
    experiencelvl,
    jobtype,
  } = req.body;
  if (title.length < 4) {
    throw new BAD_REQUESTError("title is too short");
  }
  if (description.length < 4) {
    throw new BAD_REQUESTError("description is too short");
  }

  const job = new Job({
    title: title,
    sallary: sallary,
    description: description,
    skills: skills,
    requirements: requirments,
    responsibilities: [],
    closeDate: closeTime,
    company: req.user.userId,
    sector: sector,
    experiencelvl: experiencelvl,
    jobtype: jobtype,
  });
  console.log(responsibilities);

  responsibilities.forEach((item) => {
    job.responsibilities.push(item);
  });

  job.save().then((result) => {
    return res.status(200).json({
      success: true,
      data: result,
    });
  });
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
  if (req.files) {
    //`${Date.now()}${proposal.name}`
    const { proposal } = req.files;
    const postPath = proposal;
    const src = `/proposal/${Date.now()}${proposal.name}`;

    const imagePath = path.join(
      __dirname,
      "../public/proposal/" + `${Date.now()}${proposal.name}`
    );
    await postPath.mv(imagePath);
    return res.status(200).json({
      success: true,
      msg: "File Uploaded",
      file: src,
    });
  }
};

module.exports.applyForJob = async (req, res, next) => {
  try {
    const job = req.body.jobId;
    const bid = req.body.bid;
    const user = req.user.userId;
    const appliedJob = await Job.findById(job);
    // console.log(req.body);

    const appliedUser = await userModel.findById(user);
    // console.log(appliedUser);

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
      // console.log(appliedJob);
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
  console.log("User: " + user);
  try {
    appliedJob.applicants.every((applicant) => {
      console.log(applicant.applicant);
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
      .populate(
        "applicants.applicant",
        "profilePicture username location skill name email followers skillSet"
      )
      .sort("-appliedDate")
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

//function to save job
module.exports.saveJob = asyncHandler(async (req, res, next) => {
  const job = await Job.findById(req.body.id);
  const user = await userModel.findById(req.user.userId);
  if (!job) {
    res.status(400).send("Job not found");
  }
  if (!user) {
    res.status(400).send("User not found");
  }
  if (user.savedJobs) {
    user.savedJobs.forEach((savedJob) => {
      if (savedJob.job == req.body.id) {
        res.status(400).send("Job already saved");
      }
    });
  }
  user.savedJobs.push({ job: req.body.id });
  user.save();
  res.status(200).send("Job saved successfully");
});

//function to unsave a job
module.exports.unsaveJob = asyncHandler(async (req, res, next) => {
  const job = await Job.findById(req.body.id);
  const user = await userModel.findById(req.user.userId);
  if (!job) {
    res.status(400).send("Job not found");
  }
  if (!user) {
    res.status(400).send("User not found");
  }
  if (user.savedJobs) {
    user.savedJobs.forEach((savedJob) => {
      if (savedJob.job == req.body.id) {
        user.savedJobs.remove(savedJob);
        user.save();
        res.status(200).send("Job unsaved successfully");
      }
    });
  }
  res.status(400).send("Job not saved");
});

module.exports.saveJobs = async (req, res) => {
  const post = await Job.find({
    _id: req.params.id,
    saved: req.user.userId,
  });

  if (post.length === 0) {
    const bookmark = await Job.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: { saved: req.user.userId },
      },
      { new: true }
    );
    res.status(StatusCodes.OK).json({ bookmark });
  } else {
    res.status(StatusCodes.OK).json({ post });
  }
};

module.exports.unsaveJobs = async (req, res) => {
  const post = await Job.find({
    _id: req.params.id,
    saved: req.user.userId,
  });

  if (post.length > 0) {
    const bookmark = await Job.findOneAndUpdate(
      { _id: req.params.id },
      {
        $pull: { saved: req.user.userId },
      },
      { new: true }
    );
    res.status(StatusCodes.OK).json({ bookmark });
  } else {
    res.status(StatusCodes.OK).json({ post });
  }
};

module.exports.savedJobs = async (req, res) => {
  try {
    const jobs = await Job.find({
      saved: req.user.userId,
    })
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
  }
};

module.exports.appliedJobs = async (req, res) => {
  try {
    const jobs = await Job.find({
      applicants: {
        $elemMatch: {
          applicant: req.user.UserId,
        },
      },
    })
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
  }
};

module.exports.updateJobStatus = async (req, res, next) => {
  try {
    console.log("Hre");
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
    console.log("Saved");
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


module.exports.payment = async (req, res) => {
  let { amount, id, job } = req.body;
  let total = amount * 100;
  let userFrom = req.user.userId;
  let userTo = req.body.userTo;
  try {
    stripe.paymentIntents
      .create({
        amount: total,
        currency: "INR",
        description: "Job Portal",
        payment_method: id,
        confirm: true,
      })
      .then(async (res) => {
        console.log(res);

        //create a transaction in database
        const transaction = new Payment({
          sender: userFrom,
          receiver: userTo,
          amount: amount,
          job: job,
        });
        await transaction.save();
        res.json({
          message: "Payment Successful",
          success: true,
        });
      });
  } catch (error) {
    console.log(error);
    res.json({
      message: "Payment Failed",
      success: false,
    });
  }}

module.exports.updateJob = async (req, res, next) => {
  const {
    title,
    sallary,
    description,
    skills,
    requirments,
    responsibilities,
    closeTime,
    sector,
    experiencelvl,
    jobtype,
  } = req.body;

  const { id } = req.params;
  if (title.length < 4) {
    throw new BAD_REQUESTError("title is too short");
  }
  if (description.length < 4) {
    throw new BAD_REQUESTError("description is too short");
  }

  const job = await Job.findOneAndUpdate(
    {
      _id: id,
    },

    {
      $set: {
        title: title,
        sallary: sallary,
        description: description,
        skills: skills,
        requirements: requirments,
        responsibilities: responsibilities,
        closeDate: closeTime,
        sector: sector,
        experiencelvl: experiencelvl,
        jobtype: jobtype,
      },
    }
  );

  res.status(200).json({
    success: true,
    data: job,
  });
};

module.exports.getAppliedJobs = async (req, res) => {
  try {
    const appliedJobs = await userModel
      .findById(req.user.userId)
      .populate("appliedJobs.job")
      .select("appliedJobs");

    const ajobs = await appliedJobs.populate("appliedJobs.job.company");

    console.log(ajobs);
    res.status(200).json({
      success: true,
      data: appliedJobs,
    });
  } catch (err) {
    console.log(err);

  }
};
