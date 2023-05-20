const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require("./config/db");

const app = express();
const port = 3030;

// configurasi library
dotenv.config();

// pake middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cek koneksi db
(async () => {
  try {
    await db.authenticate();
    console.log("Koneksi sukses terhubung.");
  } catch (error) {
    console.error("Tidak dapat terhubung ke database:", error);
  }
})();

app.listen(port, () => {
  console.log("server berjalan...");
});
