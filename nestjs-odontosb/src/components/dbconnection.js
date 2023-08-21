const mysql = require('mysql2/promise');

function createDbConnection() {
  return mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });
}

async function executeQuery(query) {
  const connection = createDbConnection();
  try {
    await connection.connect();
    const [rows, fields] = await connection.query(query);
    return rows;
  } catch (error) {
    throw error;
  } finally {
    connection.end();
  }
}

module.exports = {
  createDbConnection,
  executeQuery,
};
