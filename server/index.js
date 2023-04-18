require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require("./db");
const models = require("./models/models");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api", router);
app.use(errorHandler);

const publicDir = require("path").join(__dirname, "/public");
app.use(express.static(publicDir));

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => console.log(`It is working on ${PORT} PORT!`));
  } catch (error) {
    console.log(error);
  }
};

start();
