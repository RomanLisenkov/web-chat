const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const corsOptions = {
  origin: [process.env.CLIENT_URL],
  credentials: true,
};

const serverConfig = (app) => {
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(cookieParser());
  app.use(cors(corsOptions));
};

module.exports = serverConfig;
