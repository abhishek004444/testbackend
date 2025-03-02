require('dotenv').config(); // Load environment variables from .env file

module.exports = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "abhishek123",
    database: process.env.DB_NAME || "abhishek",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || "5432",
    dialect: "postgres"
  },
  test: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "abhishek123",
    database: process.env.DB_NAME || "abhishek",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || "5432",
    dialect: "postgres"
  },
  production: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "abhishek123",
    database: process.env.DB_NAME || "abhishek",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || "5432",
    dialect: "postgres"
  }
};
