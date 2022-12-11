const {
  addJob,
  getAllJobs,
  getJobsForSpecificSector,
  getJob,
  applyForJob,
  getCompanyJobDetail,
  updateJobStatus,
  getAppliedJobs,
  getAppliedJobsApp,
  getSavedJobs,
  editJob,
  submitProposal,
  getCompanyJobs,
  getApplicants,
  saveJob,
  unsaveJob,
  saveJobs,
  unsaveJobs,
} = require("../controllers/jobController");
// const { protect } = require("../middleware/authMiddleware");

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
router.route("/savejob/:id").patch(saveJobs);
router.route("/unsavejob/:id").patch(unsaveJobs);


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
