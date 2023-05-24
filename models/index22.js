"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const dotenv = require("dotenv");
const basename = path.basename(__filename);
dotenv.config();

const env = process.env.NODE_ENV || "development";
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbDatabase = process.env.DB_DATABASE;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

const db = {};

let sequelize;
sequelize = new Sequelize(dbDatabase, dbUsername, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: "mysql", // Sesuaikan dengan dialek database yang digunakan
  define: {
    timestamps: false,
  },
});

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
