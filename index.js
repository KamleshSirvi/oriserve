const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
// const axios = require("axios");
const supportRouter = require("./routes/support.route");
const { supportPromptController } = require("./controllers/support.controller");

const app = express();

// read the prompt when server starts
const supportPromptTemplate = fs.readFileSync(
  path.join(__dirname, "/prompt/supportPrompt.txt"),
  "utf-8"
);

supportPromptController(supportPromptTemplate);

// middleWare
app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1/support", supportRouter);

// server start
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
