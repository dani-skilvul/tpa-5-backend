const User = require("../models").User;
const { nanoid } = require("nanoid");
const bcrypt = require("bcrypt");

const registerUserController = async (req, res) => {
  try {
    const id = nanoid(6);
    const { nama, email, password, confPassword } = req.body;

    // validasi: data harus terisi semua
    if (!nama || !email || !password || !confPassword) {
      return res.status(400).json({
        status: "error",
        message:
          "Semua data nama, email, password, dan confPassword harus diisi",
      });
    }

    // validasi: jika password != confPassword
    if (password !== confPassword) {
      // berikan response error
      return res.status(400).json({
        status: "error",
        message: "password dan confPassword tidak sama",
      });
    }

    // hashing password
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    // buat object newUser
    const newUser = {
      id,
      nama,
      email,
      password: hashPassword,
    };

    // proses add user
    await User.create(newUser);

    // berikan response berhasil
    return res.json({
      status: "success",
      message: "User berhasil dibuat",
      data: {
        userId: id,
      },
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const loginUserController = (req, res) => {};

module.exports = {
  registerUserController,
  loginUserController,
};
