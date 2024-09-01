const User = require("../models/userModel");

const createNewUser = async (req, res) => {
  const { firstName, lastName, email, dob, password } = req.body;
  try {
    // create a user data object from user info
    const userData = {
      firstName,
      lastName,
      email,
      dob,
      password,
    };

    // creat a new instance of user from User data
    const newUser = new User(userData);

    // save user data on database
    await newUser.save();

    // check if user info fails to save on the database
    if (!newUser) {
      return res.status(400).json({ error: "user creation failed" });
    }

    // return success response if operation is successful
    return res
      .status(201)
      .json({ message: "user created successfully", newUser });
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();

    // check if there are no users in the database
    if (!users || users.length <= 0) {
      return res.status(404).json({ error: "no user found" });
    }

    // return success response if operation is successful
    return res
      .status(200)
      .json({ message: "users fetched successfully", users });
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};

const getSingleUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);

    // check if user is not found
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    return res.status(200).json({ message: "user fetched successfully", user });
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};

const updateUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByIdAndUpdate(userId, req.body, { new: true });

    if (!user) {
      return res.status(400).json({ error: "user update failed" });
    }
    return res.status(200).json({ message: "user updated successfully", user });
  } catch (error) {
    res.send(500).json({ error: "something went wrong" });
  }
};

const deleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(400).json({ error: "user delete failed" });
    }
    return res.status(200).json({ message: "user deleted successfully", user });
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};

module.exports = {
  createNewUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
