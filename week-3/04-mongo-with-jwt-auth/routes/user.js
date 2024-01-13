const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {secret} = ("../config.js");
const {User,Course} = require("../db")

// User Routes
router.post('/signup',async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  await Admin.create({ username: username, password: password });
  res.json({ msg: "Created user success" });
});

router.post('/signin',async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    await User.create({ username: username, password: password });
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

router.get("/courses", async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.json({ courses: courses });
  });
  
  router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    await User.updateOne(
      { username: username },
      {
        $push: {
          purchaseCourses: courseId,
        },
      }
    );
    res.json({
      message: "Course purchased successfully",
    });
  });
  
  router.get("/purchasedCourses", userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user = await User.findOne({ username: username });
    const courses = await Course.find({
      _id: {
        $in: user.purchaseCourses,
      },
    });
    res.json({
      courses: courses,
    });
  });

module.exports = router