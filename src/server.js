const http = require("http");
const { PORT } = require("./config/index");
const app = require("./app");
const httpServer = http.createServer(app);
const connectDb = require("./helpers/dbConfig");

const startServer = async () => {
  await connectDb();
  httpServer.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
};

startServer();
