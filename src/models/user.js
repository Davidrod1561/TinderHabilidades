class User {
    constructor(id, name, email, skills) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.skills = skills || [];
    }
  }
  
  module.exports = User;