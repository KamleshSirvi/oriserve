const router = require("express").Router();
const { supportController } = require("../controllers/support.controller");

router.post("/summarize", supportController);

module.exports = router;
