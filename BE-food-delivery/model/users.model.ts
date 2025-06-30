import { model, Schema } from "mongoose";

enum UserRoleUnum {
  ADMIN = "ADMIN",
  USER = "USER",
}

export type User = {
  _id: String;
  email: string;
  password: string;

  phoneNumber?: string;
  address?: string;
  role?: UserRoleUnum;
  isVerified?: boolean;

  greatedAt: Date;
  updatedAt: Date;
};

const Users = new Schema<User>({
  email: { type: String, required: true },
  password: { type: String, required: true },

  phoneNumber: { type: String, required: false },
  address: { type: String, required: false },
  role: { type: String, enum: ["ADMIN", "USER"], required: false },
  isVerified: { type: Boolean, required: false },

  greatedAt: { type: Date, defualt: Date.now, immutable: true },
  updatedAt: { type: Date, defualt: Date.now },
});

export const UserModel = model<User>("Users", Users);
