require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "abhishek123",
    database: process.env.DB_NAME || "abhishek",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || "5432",
    dialect: "postgres",
    logging: false,
    dialectOptions: {
        connectTimeout: 60000 // ✅ Increase timeout
      }
  }
};
