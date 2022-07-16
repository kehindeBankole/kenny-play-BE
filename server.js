import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({
  path: "./config.env",
});

const DATABASE = process.env.DATABASE;

import app from "./app.js";

mongoose
  .connect(DATABASE)
  .then((connection) => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
    console.log("err");
  });

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
