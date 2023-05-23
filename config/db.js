const { Sequelize } = require("sequelize");
const config = require("./config.json");

const env = "production";
const dbConfig = config[env];

const db = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    define: {
      timestamps: false,
    },
  }
);

module.exports = db;
