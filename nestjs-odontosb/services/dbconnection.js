const mysql = require('mysql2/promise');
import { getCookie } from 'cookies-next';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET;

const dbConnection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

async function select(table, column, where) {
  try {
    /*const decodedToken = jwt.verify(token, SECRET);*/
    const connection = await dbConnection.getConnection();
    try {
      const [rows, fields] = await connection.query(`SELECT ${column} FROM ${table} WHERE ${where}`);
      return rows;
    } finally {
      connection.release();
    }
  } catch (err) {
    throw new Error('Token inválido');
  }
}

async function add(table, data) {
  const connection = await dbConnection.getConnection();
  try {
    const [result] = await connection.query(`INSERT INTO ${table} SET ?`, data);
    return result;
  } finally {
    connection.release();
  }
}

async function update(table, data, where) {
  const connection = await dbConnection.getConnection();
  try {
    const [result] = await connection.query(`UPDATE ${table} SET ? WHERE ${where}`, data);
    return result;
  } finally {
    connection.release();
  }
}

module.exports = {
  select,
  add,
  update,
};