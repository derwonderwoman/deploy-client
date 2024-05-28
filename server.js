const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

app.listen(process.env.PORT || 3001, () => {
  console.log(`running on port ${process.env.PORT || 3001}`);
});

app.use(express.static(path.join(__dirname, "/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./build", "index.html"));
});
