const Recruiter = require("../models/Recruiter");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// POST /api/auth/login
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const recruiter = await Recruiter.findOne({ email });
    if (!recruiter) return res.status(401).json({ message: "Invalid credentials" });

    const valid = await bcrypt.compare(password, recruiter.password);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: recruiter._id, role: "recruiter" }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.json({ token, role: "recruiter", email: recruiter.email, name: recruiter.name });
  } catch (err) {
    next(err);
  }
};

// GET /api/recruiters
const getRecruiters = async (req, res, next) => {
  try {
    const recruiters = await Recruiter.find();
    res.json(recruiters);
  } catch (err) {
    next(err);
  }
};

// POST /api/recruiters/register
const registerRecruiter = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newRecruiter = new Recruiter({ name, email, password: hashedPassword });
    await newRecruiter.save();
    res.json({ message: "Recruiter registered successfully!" });
  } catch (err) {
    next(err);
  }
};

module.exports = { login, getRecruiters, registerRecruiter };
