const {
  addJob,
  getAllJobs,

  getJob,
  applyForJob,

  updateJobStatus,

  getAppliedJobs,


  submitProposal,
  getCompanyJobs,
  getApplicants,
  saveJob,
  unsaveJob,
  saveJobs,
  unsaveJobs,
  savedJobs,

  createdJobs,
  payment,

  appliedJobs,
  updateJob,

} = require("../controllers/jobController");

const router = require("express").Router();
router.get("/getAllJobs", getAllJobs);
router.post("/addJob", addJob);
router.get("/getJob/:id", getJob);
router.post("/applyForJob", applyForJob);
router.post("/sendProposal", submitProposal);
router.post("/saveJob", saveJob);
router.post("/unsaveJob", unsaveJob);
router.get("/getCompanyJob", getCompanyJobs);
router.get("/getApplicants/:id", getApplicants);
router.get("/getAppliedJobs", getAppliedJobs);
router.route("/savejob/:id").patch(saveJobs);
router.route("/unsavejob/:id").patch(unsaveJobs);
router.route("/savedjobs").get(savedJobs);
router.route("/appliedjobs").get(appliedJobs);
router.route("/updateStatus").post(updateJobStatus);

router.route("/payment").post(payment);

router.route("/updatejob/:id").put(updateJob);

//   router.get("/getCompanyJobDetail", getCompanyJobDetail);
//   router.route("/getCompanyJobDetailApp").get(protect, getCompanyJobDetailApp);
// router.get("/getCompanyJobDetailApp", getCompanyJobDetailApp);
//   router.get("/getAllJobs", getAllJobs);
//   router.get("/getSectorJob", getJobsForSpecificSector);
//   router.post("/updateJobStatus", updateJobStatus);

//   router.route("/savedJobs").get(protect, getSavedJobs);
//   router.route("/appliedJobs").get(protect, getAppliedJobs);
//   router.route("/appliedJobsApp").get(protect, getAppliedJobsApp);
//   router.route("/applyForJob").post(protect, applyForJob);
//   router.route("/editJob").put(protect, editJob);


module.exports = router;
