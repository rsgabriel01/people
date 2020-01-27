require('dotenv/config');

module.exports = {
  dialect: "postgres",
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  schema: "public",
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  logging: false
};