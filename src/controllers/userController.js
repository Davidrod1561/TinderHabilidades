const User = require('../models/user');
const Skill = require('../models/skill');

const users = [];
let userIdCounter = 1;

const createUser = (name, email, skills) => {
  const user = new User(userIdCounter++, name, email, skills);
  users.push(user);
  return user;
};

const getUserById = (userId) => users.find((user) => user.id === userId);

module.exports = { createUser, getUserById };