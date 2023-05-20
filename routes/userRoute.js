const express = require("express");
const {
  addUserController,
  getUsersController,
  getUserByIdController,
  editUserByIdController,
  deleteUserByIdController,
} = require("../controllers/userController");

const routeUser = express.Router();

routeUser.post("/user", addUserController);
routeUser.get("/users", getUsersController);
routeUser.get("/user/:id", getUserByIdController);
routeUser.edit("/user", editUserByIdController);
routeUser.delete("/user", deleteUserByIdController);

module.exports = routeUser;
