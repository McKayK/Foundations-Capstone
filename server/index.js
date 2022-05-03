const express = require("express");
const cors = require("cors");
const path = require("path");
const process = require("dotenv");

require("dotenv").config();

const app = express();
app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

const port = process.env.PORT || 4003;

app.listen(port, () => console.log("Running on port 4003"));
