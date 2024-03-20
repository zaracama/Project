const  CompanyController = require("../controllers/ CompanyController");
const { authenMiddleware } = require("../middlewares/authen");
const { authorizedAdmin } = require("../middlewares/authorizedAdmin");

const router = require(`express`).Router();

router.use(authenMiddleware);

router.get(`/`,  CompanyController.list);

router.post(`/`,authorizedAdmin,  CompanyController.add);
router.put(`/:id`,authorizedAdmin,  CompanyController.edit);
router.delete(`/:id`,authorizedAdmin,  CompanyController.del);

module.exports = router;