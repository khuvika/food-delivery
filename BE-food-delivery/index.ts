//res api

import express from "express";
import cors from "cors";

import mongoose from "mongoose";
import { UserRouter } from "./router/user.router";

const server = express();
server.use(cors());
server.use(express.json());

const dataBaseStart = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tuguldur:OvC0zNYd69RPDLaa@food-delivery.y0tz6fo.mongodb.net/"
    );
    console.log("database connected succesfully/");
  } catch (err) {
    console.log(err);

    throw new Error(" Data base assangui");
  }
};
dataBaseStart();

server.use(UserRouter);

server.listen(8000, () => {
  console.log("http://localhost:8000");
});
