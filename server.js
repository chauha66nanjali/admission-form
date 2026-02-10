const express = require("express");
const multer = require("multer");

const app = express();

// middleware (express documentation style)
app.use(express.urlencoded({ extended: true }));

// file upload setup
const upload = multer({ dest: "uploads/" });

// route
app.post("/submit", upload.single("photo"), (req, res) => {

  const {
    fullname,
    dob,
    gender,
    email,
    mobile,
    course,
    address
  } = req.body;

  console.log("Name:", fullname);
  console.log("DOB:", dob);
  console.log("Gender:", gender);
  console.log("Email:", email);
  console.log("Mobile:", mobile);
  console.log("Course:", course);
  console.log("Address:", address);
  console.log("Photo:", req.file.filename);

  res.send("Admission Form Submitted Successfully");
});

// server start
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
