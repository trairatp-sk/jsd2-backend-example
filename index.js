const express = require("express");
const { default: mongoose } = require("mongoose");

const activityRouter = require("./src/routers/activities");

const PORT = 8080;

const app = express();

// Middlewares
app.use(express.json());

app.use("/activities", activityRouter);

const start = async () => {
  // DO NOT COMMIT/PUSH USERNAME AND PASSWORD TO Github
  await mongoose.connect(process.env.DATABASE_URI, {
    dbName: process.env.DATABASE_NAME,
    writeConcern: "majority",
    retryWrites: true,
    user: process.env.DATABASE_USER,
    pass: process.env.DATABASE_PASS,
  });
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
};

start();
