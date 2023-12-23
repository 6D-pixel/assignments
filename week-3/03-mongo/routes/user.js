const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
app.post('/signup', (req, res) => {
    // Implement user signup logic
    UserActivation.create({
        username: req.body.username,
        password: req.body.password
    })
    res.json({
        message: 'User created successfully'
    })
});

app.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find()
      .then(courses => {
            res.json(courses);
        })
});

app.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

app.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});
