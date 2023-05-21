const Todo = require("../models").Todo;
const { nanoid } = require("nanoid");

const addTodoController = async (req, res) => {
  try {
    const id = nanoid(6);
    const todo = req.body.todo;

    // buat objek todo
    const newTodo = {
      id,
      todo,
    };

    // memasukkan data
    await Todo.create(newTodo);

    return res.status(201).json({
      message: "Todo berhasil dibuat",
      todo: todo,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const getTodosController = async (req, res) => {
  try {
    const data = await Todo.findAll();
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const getTodoByIdController = async (req, res) => {};
const editTodoByIdController = (req, res) => {};
const deleteTodoByIdController = (req, res) => {};

module.exports = {
  addTodoController,
  getTodosController,
  getTodoByIdController,
  editTodoByIdController,
  deleteTodoByIdController,
};
