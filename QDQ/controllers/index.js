const express = require("express");
const router = express.Router();
const path = require("path");

const homeController = require(path.join(__dirname, "frontend", "homeController"));
const adminController = require(path.join(__dirname, "backend", "adminController"));

router.use("/", homeController);
router.use("/admin", adminController);

module.exports = router;