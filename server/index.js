const express = require("express");
const cors = require("cors");
const path = require("path");
const process = require("dotenv");

const app = express();
app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log("Running on port 4003"));
