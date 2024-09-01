const express = require("express");
const userRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");
const app = express();

// global middleware for accepting json data from client;
app.use(express.json());

// health check
app.get("/", (req, res) => {
  res.json({ message: "Server is live" });
});

app.use("/users", userRouter);
app.use("/blogs", blogRouter);

module.exports = app;
