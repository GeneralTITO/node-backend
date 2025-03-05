import { User, UserCreate, UserReturn } from "../interfaces";
import { prisma } from "../prismaClient";

const create = async (payload: UserCreate): Promise<User> => {
  let formattedPayload = { ...payload };

  if (typeof payload.dateOfBirth === "string") {
    formattedPayload.dateOfBirth = new Date(payload.dateOfBirth);
  }

  const user = await prisma.user.create({
    data: formattedPayload,
  });

  return user;
};

const read = async (): Promise<User[]> => {
  return await prisma.user.findMany();
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
