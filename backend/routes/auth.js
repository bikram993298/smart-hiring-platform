const express = require("express");
const router = express.Router();
const { login, registerRecruiter } = require("../controllers/recruiterControllers");

// POST /api/auth/login
router.post("/login", login);

// POST /api/auth/register
router.post("/register", registerRecruiter);

module.exports = router;
