const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true }));
dotenv.config({ path: `${__dirname}/config.env` });

app.use(cors())

app.use(helmet());

app.use("/api", (req, res, next) => {
    // next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
  res.json({ message: "Hello from backend" });
});


module.exports = app;

