
const { select, add, update } = require('../../../services/dbconnection.js');

module.exports = async function handler(req, res) {
  try {
    const id = req.query.id
    const users = await select('users' , '*',`id = '${id}`); 
    res.status(201).json(users);
  } catch (err) {
    res.status(400).json(err.message);
  }
};