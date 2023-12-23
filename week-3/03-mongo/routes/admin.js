const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

app.use(boduParser.json());

// Admin Routes
app.post("/signup", (req, res) => {
    Admin.create({
        username: req.body.username,
        password: req.body.password
    })
    res.json({
        msg: 'Admin created successfully'
    })
});

app.post("/courses", adminMiddleware, (req, res) => {
    Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    })
    res.json({
        msg: 'Course created successfully'
    })    
});

app.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find().then((courses) => res.json(courses))
});

module.exports = router;
