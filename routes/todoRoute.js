const express = require("express");
const {
  addTodoController,
  getTodosController,
  getTodoByIdController,
  editTodoByIdController,
  deleteTodoByIdController,
} = require("../controllers/todoController");

const routeTodo = express.Router();

routeTodo.post("/todo", addTodoController);
routeTodo.get("/todos", getTodosController);
routeTodo.get("/todo/:id", getTodoByIdController);
routeTodo.edit("/todo", editTodoByIdController);
routeTodo.delete("/todo", deleteTodoByIdController);

module.exports = routeTodo;
