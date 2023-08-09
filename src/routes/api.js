const express = require('express');
const bodyParser = require('body-parser');
const userController = require('../controllers/userController');
const jobController = require('../controllers/jobController');

const router = express.Router();
router.use(bodyParser.json());

router.post('/users', (req, res) => {
  const { name, email, skills } = req.body;
  const user = userController.createUser(name, email, skills);
  res.status(201).json(user);
});

router.post('/jobs', (req, res) => {
  const { description, duration, pricePerHour, applicantId, providerId } = req.body;
  const job = jobController.createJob(description, duration, pricePerHour, applicantId, providerId);
  res.status(201).json(job);
});

router.get('/jobs/:providerId', (req, res) => {
  const providerId = parseInt(req.params.providerId);
  const jobs = jobController.getJobsByProviderId(providerId);
  res.json(jobs);
});

router.patch('/jobs/:jobId/:status', (req, res) => {
  const jobId = parseInt(req.params.jobId);
  const status = req.params.status;
  const job = jobController.updateJobStatus(jobId, status);
  if (job) {
    res.json(job);
  } else {
    res.status(404).json({ message: 'Job not found' });
  }
});

module.exports = router;