const express = require('express');
const { default: mongoose } = require('mongoose');

const activityRouter = require('./src/routers/activities');

const PORT = 8080;

const app = express();

// Middlewares
app.use(express.json());

app.use('/activities', activityRouter);

const start = async () => {
  // DO NOT COMMIT/PUSH USERNAME AND PASSWORD TO Github
  await mongoose.connect(
    'mongodb+srv://<username>:<password>@sandbox.auu6ido.mongodb.net/?retryWrites=true&w=majority'
  );
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
};

start();
