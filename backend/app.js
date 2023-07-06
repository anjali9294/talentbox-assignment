const express = require("express");
const mongoose = require("mongoose");

const { register, login } = require("./Controller/user");
const { course } = require("./Controller/course");
const { body, validationResult } = require("express-validator");
const cors = require("cors");
const app = express();

const port = 3000;
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://edureka:edureka123@edureka.vvipexh.mongodb.net/talent-box-assignment",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

app.use(express.json());

// User registration
app.post(
  "/register",
  [body("email").isEmail(), body("password").isLength({ min: 6 })],
  register
);

// // User login
app.post("/login", login);

app.post("/logout", (req, res) => {
  res.status(200).json({ message: "Logout successful" });
});

// Route handler to fetch course data
app.get("/courses", course);

// Middleware function to verify JWT token
function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  jwt.verify(token, "secret-key", (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }
    req.userId = decoded.userId;
    next();
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
