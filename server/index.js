require("dotenv").config();
const express = require("express");
const db = require("./db/models");
const serverConfig = require("./config/serverConfig");
const router = require("./router/index");
const errorMiddleware = require("./middlewares/error-middleware");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const messageService = require("./service/message-service");
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
  },
});

io.on("connection", (socket) => {
  socket.on("send_message", (message) => {
    messageService.addMessage(message);
    io.emit("recive_message", message);
  });
  socket.on("disconnect", function () {
    console.log("disconnected!");
  });
});



const PORT = process.env.PORT ?? 3000;

serverConfig(app);

app.use("/api", router);

const start = async () => {
  try {
    server.listen(PORT, () => console.log(`Server started at PORT = ${PORT}`));
  } catch (e) {
    console.log({ ERROR_START: e });
  }
};

async function testConnection() {
  try {
    await db.sequelize.authenticate();
    console.log("DB connection success");
  } catch (e) {
    console.log({ ERROR_DB_CONNECTION: e });
  }
}
app.use(errorMiddleware);
testConnection();
start();
