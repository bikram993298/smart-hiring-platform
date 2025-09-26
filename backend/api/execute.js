// backend/routes/execute.js
const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/", async (req, res) => {
  const { language, code, input } = req.body;

  try {
    // Map languages to Judge0 API IDs
    const langMap = {
      cpp: 54,        // C++ (GCC 9.2.0)
      python: 71,     // Python (3.8.1)
      javascript: 63, // Node.js (12.14.0)
    };

    const response = await axios.post(
      "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",
      {
        source_code: code,
        language_id: langMap[language],
        stdin: input,
      },
      {
        headers: {
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      }
    );

    res.json({ output: response.data.stdout || response.data.stderr || "No output" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
