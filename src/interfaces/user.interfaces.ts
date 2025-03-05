import { z } from "zod";
import {
  UserSchema,
} from "../schemas";
import { Prisma } from "@prisma/client";
import { UserReturnSchema } from "../schemas/user.schemas";
type User = z.infer<typeof UserSchema>;
type UserCreate = Prisma.UserCreateInput;
type UserUpdate = Prisma.UserUpdateInput;
type UserReturn = z.infer<typeof UserReturnSchema>

export { User, UserCreate, UserUpdate , UserReturn};
