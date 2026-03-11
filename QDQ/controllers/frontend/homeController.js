const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("frontend/index");
});

router.get("/page2", (req, res) => {
    res.render("frontend/page2");
});

module.exports = router;