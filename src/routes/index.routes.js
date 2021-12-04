const { Router } = require("express");
const router = Router();

const { getIndex } = require("../controllers/index.controllers");

router.get("/", getIndex);

module.exports = router;
