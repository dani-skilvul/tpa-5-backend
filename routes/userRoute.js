const express = require("express");
const {
  addUserController,
  getUsersController,
  getUserByIdController,
  editUserByIdController,
  deleteUserByIdController,
} = require("../controllers/userController");

const userRoute = express.Router();

userRoute.post("/user", addUserController);
userRoute.get("/users", getUsersController);
userRoute.get("/user/:id", getUserByIdController);
userRoute.put("/user", editUserByIdController);
userRoute.delete("/user", deleteUserByIdController);

module.exports = userRoute;
