const express = require("express");
const userRouter = express.Router();
const {
  createNewUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

userRouter.post("/", createNewUser);
userRouter.get("/", getAllUser);
userRouter.get("/:userId", getSingleUser);
userRouter.put("/:userId", updateUser);
userRouter.delete("/:userId", deleteUser);

module.exports = userRouter;
