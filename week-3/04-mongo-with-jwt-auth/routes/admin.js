const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course } = require("../db");
const router = Router();
const {secret} = ("../config.js");
const jwt = require("jsonwebtoken")

// Admin Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  await Admin.create({ username: username, password: password });
  res.json({ msg: "Created admin success" });
});

router.post("/signin",async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await Admin.find({username, password})
  if(user){
    const token = jwt.sign({username},secret);
    res.json({ token: token});
  }
  else{
    res.status(411).json({ msg:"admin not found" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const titel = req.body.titel;
  const description = req.body.description;
  const price = req.body.price;
  const image = req.body.image;
  const newCourse = await Course.create({ titel, description, price, image });
  res.json({ msg: "Course created", couserId: newCourse._id });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const response = await Course.find({});
  res.json({courses : response});
});

module.exports = router;
