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

  payment,

  appliedJobs,
  updateJob,
  getHiredApplicant,
  getPayment,
  getAllPayment,
  updateTransactionStatus,
  addCard,
  getCard,
  getMyDetails,
} = require("../controllers/jobController");

const router = require("express").Router();
router.get("/getAllJobs", getAllJobs);
router.post("/addJob", addJob);
router.get("/getJob/:id", getJob);
router.get("/hired/:id", getHiredApplicant);
router.get("/getPayment/:id", getPayment);
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
router.route("/payments").get(getAllPayment);
router.route("/card").put(addCard);
router.route("/card").get(getCard);
router.route("/me").get(getMyDetails);

router.route("/updatejob/:id").put(updateJob);
router.route("/updateTransaction").put(updateTransactionStatus);

module.exports = router;
