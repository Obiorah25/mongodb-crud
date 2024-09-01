const Blog = require("../models/blogModel");

const createNewBlog = async (req, res) => {
  const { title, content } = req.body;
  try {
    // create a new blog data object from blog info
    const blogData = {
      title,
      content,
    };

    // create a new instance blog from blog data
    const newBlog = new Blog(blogData);

    // save blog data on database
    await newBlog.save();

    // check if blog info fails to save on the database
    if (!newBlog) {
      return res.status(400).json({ error: "blog creation failed" });
    }
    return res
      .status(201)
      .json({ message: "blog created successfully", newBlog });
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};

// get all blogs data from the database
const getAllBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();

    // check if there are no blogs in the database
    if (!blogs || blogs.length <= 0) {
      return res.status(404).json({ error: "no blog found" });
    }
    return res
      .status(200)
      .json({ message: "blogs fetched successfully", blogs });
  } catch (error) {
    return res.status(500).json({ error: "something went wrong" });
  }
};

// get a single blog data from the database
const getSingleBlog = async (req, res) => {
  const { blogId } = req.params;
  try {
    const blogs = await Blog.findById(blogId);

    // check if blog is not found
    if (!blogs) {
      return res.status(404).json({ error: "user not found" });
    }
    return res
      .status(200)
      .json({ message: "blog fetched successfully", blogs });
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};

// update a single blog data from the database
const updateBlog = async (req, res) => {
  const { blogId } = req.params;
  try {
    const blogs = await Blog.findByIdAndUpdate(blogId, req.body, { new: true });

    if (!blogs) {
      return res.status(400).json({ error: "blog update failed" });
    }
    return res
      .status(200)
      .json({ message: "blog updated successfully", blogs });
  } catch {
    res.status(500).json({ error: "something went wrong" });
  }
};

// delete a single blog data from the database
const deleteBlog = async (req, res) => {
  const { blogId } = req.params;
  try {
    const blogs = await Blog.findByIdAndDelete(blogId);
    if (!blogs) {
      return res.status(400).json({ error: "blog delete failed" });
    }
    return res
      .status(200)
      .json({ message: "blog deleted successfully", blogs });
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};

module.exports = {
  createNewBlog,
  getAllBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
