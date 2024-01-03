const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  await Admin.create({ username: username, password: password });
  res.json({ msg: "Created user success" });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const titel = req.body.titel;
  const description = req.body.description;
  const price = req.body.price;
  const image = req.body.image;
  const newCourse = await Course.create({ titel, description, price, image });
  res.json({ msg: "Course created", couserId: newCourse._id });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});
  res.json({courses : response});
});

module.exports = router;
