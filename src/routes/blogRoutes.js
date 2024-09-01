const express = require("express");
const blogRouter = express.Router();
const {
  createNewBlog,
  getAllBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogControllers");

blogRouter.post("/", createNewBlog);
blogRouter.get("/", getAllBlog);
blogRouter.get("/:blogId", getSingleBlog);
blogRouter.put("/:blogId", updateBlog);
blogRouter.delete("/:blogId", deleteBlog);

module.exports = blogRouter;
