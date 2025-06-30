import { Router } from "express";
import { signUp } from "../controller/user/signup";
import { login } from "../controller/user/login";

export const UserRouter = Router();

UserRouter.post("/signup", signUp);
UserRouter.post("/login", login);
