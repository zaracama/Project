const router = require("express").Router();
const user = require("./user");
const company = require("./company");
const job = require("./job");

router.use("/user", user);
router.use("/company", company);
router.use("/job", job);

module.exports = router;