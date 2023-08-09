class Job {
    constructor(id, description, duration, pricePerHour, applicantId, providerId) {
      this.id = id;
      this.description = description;
      this.duration = duration;
      this.pricePerHour = pricePerHour;
      this.applicantId = applicantId;
      this.providerId = providerId;
      this.status = 'pending';
    }
  }
  
  module.exports = Job;