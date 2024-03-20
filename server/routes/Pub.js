const JobController = require("../controllers/JobController");
const router = require(`express`).Router();

router.get(`/jobs`, JobController.listPublic);
router.get(`/jobs/:id`, JobController.detailPublic);

module.exports = router;