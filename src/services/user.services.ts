import { hashSync } from "bcryptjs";
import { User, UserCreate, UserReturn } from "../interfaces";
import { prisma } from "../prismaClient";
import {
  ArrayUserReturnSchema,
  UserReturnSchema,
} from "../schemas/user.schemas";

const create = async (payload: UserCreate): Promise<UserReturn> => {
  let formattedPayload = { ...payload };

  if (typeof payload.dateOfBirth === "string") {
    formattedPayload.dateOfBirth = new Date(payload.dateOfBirth);
  }

  if (formattedPayload.password) {
    formattedPayload.password = hashSync(formattedPayload.password, 10);
  }

  const user = await prisma.user.create({
    data: formattedPayload,
  });

  return UserReturnSchema.parse(user);
};

const read = async (): Promise<UserReturn[]> => {
  const users = await prisma.user.findMany();

  return ArrayUserReturnSchema.parse(users);
};

const readOne = async (userId: number): Promise<UserReturn> => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  return user;
};

const destroy = async (userId: number): Promise<void> => {
  await prisma.user.delete({
    where: { id: userId },
  });
};

export default { create, read, destroy, readOne };
