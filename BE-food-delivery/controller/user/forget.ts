import { NextFunction, Request, Response } from "express";
import { UserModel } from "../../model/users.model";

export const sendOtp = async (request: Request, response: Response) => {
  const { email } = request.body;

  const isEmailExisted = await UserModel.findOne({ email });

  if (!isEmailExisted) {
    response.status(404).send({ message: "Users not found" });
    return;
  }
  const otp = 1234;

  //   const transport = nodemailer.createTransport({
  //     service: "gmail",
  //     host:"smtp.gmail.com",
  //     port:465,
  //     auth:{
  //         user:"tuguldur@gmail.com",
  //         pass:
  //     }
  //   })

  response.send({ message: "OTP sent" });
};
