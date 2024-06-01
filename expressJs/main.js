const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

app.use(cors());

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_fullstack",
});

database.connect((err) => {
  if (err) throw err;
  console.log("database connected");
});

// ! Ambil data users
app.get("/api/v1/users", (req, res) => {
  console.log("GET API DI Request");
  database.query("SELECT * FROM users", (err, rows) => {
    if (err) throw err;
    res.json({
      success: true,
      message: "getting users data",
      data: rows,
    });
  });

  // res.send("Hello World");
});

// ? jalanin server di port 3001

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
