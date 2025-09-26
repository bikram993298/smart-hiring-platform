const Job = require("../models/Job");

// GET /api/jobs
const getJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    next(err);
  }
};

// POST /api/jobs
const addJob = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const newJob = new Job({ title, description });
    await newJob.save();
    res.json(newJob);
  } catch (err) {
    next(err);
  }
};

// GET /api/jobs/:id
const getJobById = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json(job);
  } catch (err) {
    next(err);
  }
};

// DELETE /api/jobs/:id
const deleteJob = async (req, res, next) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json({ message: "Job deleted successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = { getJobs, addJob, getJobById, deleteJob };
