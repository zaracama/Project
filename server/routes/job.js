const JobController = require("../controllers/JobController");
const { authenMiddleware } = require("../middlewares/authentication");
const { authorized } = require("../middlewares/authorized");
const router = require(`express`).Router();

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.use(authenMiddleware);

router.post(`/`, JobController.add);
router.get(`/`, JobController.list);
router.get(`/:id`, JobController.detail);

router.put(`/:id`, authorized, JobController.edit);
router.delete(`/:id`, authorized, JobController.delete);
router.patch(
  `/:id/image`,
  authorized,
  upload.single(`imgUrl`),
  JobController.patchImage
);

module.exports = router;