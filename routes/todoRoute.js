const express = require("express");
const {
  addTodoController,
  getTodosController,
  getTodoByIdController,
  editTodoByIdController,
  deleteTodoByIdController,
} = require("../controllers/todoController");

const todoRoute = express.Router();

todoRoute.post("/todo", addTodoController);
todoRoute.get("/todos", getTodosController);
todoRoute.get("/todo/:id", getTodoByIdController);
todoRoute.put("/todo", editTodoByIdController);
todoRoute.delete("/todo", deleteTodoByIdController);

module.exports = todoRoute;
