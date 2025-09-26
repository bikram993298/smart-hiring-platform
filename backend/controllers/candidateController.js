const Candidate = require("../models/Candidate");

const getCandidates = async (req, res, next) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (err) {
    next(err);
  }
};

const addCandidate = async (req, res, next) => {
  try {
    const { name, email, resumeUrl } = req.body;
    const candidate = new Candidate({ name, email, resumeUrl });
    await candidate.save();
    res.json(candidate);
  } catch (err) {
    next(err);
  }
};

module.exports = { getCandidates, addCandidate };
