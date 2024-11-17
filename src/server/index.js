const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const analyze = require("./analyze.js");

port = 5000;
const key = process.env.API_KEY;

dotenv.config();

app.use(cors());

app.use(express.json());
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.post("/", async (req, res) => {
  const url = req.body.input;
  const analyze = await analyze(url, key);
  const { code, msg, sample } = analyze;
  if (code == 100 || code == 212) {
    return res.send({ msg: msg, code: code });
  }

  return res.send({ sample: sample, code: code });
});

app.listen(port, () => console.log(`server is listening on port ${port}`));
