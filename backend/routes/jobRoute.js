const {
  addJob,
  getAllJobs,

  getJob,
  applyForJob,

  updateJobStatus,

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
router.route("/savejob/:id").patch(saveJobs);
router.route("/unsavejob/:id").patch(unsaveJobs);
router.route("/savedjobs").get(savedJobs);
router.route("/createdjobs").get(createdJobs);
router.route("/updateStatus").post(updateJobStatus);
router.route("/payment").post(payment);

module.exports = router;
