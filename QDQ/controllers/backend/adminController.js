const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
    res.render("backend/login");
});

router.get("/products", (req, res) => {
    res.render("backend/products");
});

module.exports = router;