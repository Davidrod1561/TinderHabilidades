const Job = require('../models/job');

const jobs = [];
let jobIdCounter = 1;

const createJob = (description, duration, pricePerHour, applicantId, providerId) => {
  const job = new Job(jobIdCounter++, description, duration, pricePerHour, applicantId, providerId);
  jobs.push(job);
  return job;
};

const getJobsByProviderId = (providerId) => jobs.filter((job) => job.providerId === providerId);

const updateJobStatus = (jobId, status) => {
  const job = jobs.find((job) => job.id === jobId);
  if (job) {
    job.status = status;
    return job;
  }
  return null;
};

module.exports = { createJob, getJobsByProviderId, updateJobStatus };