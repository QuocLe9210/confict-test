const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/static", express.static(path.join(__dirname, "public")));

const router = require(path.join(__dirname, "controllers", "index.js"));
app.use("/", router);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});