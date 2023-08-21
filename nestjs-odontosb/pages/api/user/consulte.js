
const { select, add, update } = require('../../../services/dbconnection.js');

module.exports = async function handler(req, res) {
  try {
    const users = await select('users' , '*',"id = '1' and senha = '12345'"); ;
    res.status(201).json(users);
  } catch (err) {
    res.status(400).json(err.message);
  }

  };