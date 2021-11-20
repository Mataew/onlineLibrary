const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Ibragim:munaev230903ibra@cluster0.s3uug.mongodb.net/onlineLibrary?retryWrites=true&w=majority"
    );
    console.log("Сервер успешно соединен с MongoDB");
    app.listen(4500, () => {
      console.log("Сервер успешно запущен");
    });
  } catch (error) {
    console.log(error.message);
  }
};

connect();
