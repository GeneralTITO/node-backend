
import { User, UserCreate, UserReturn } from "../interfaces";
import { prisma } from "../prismaClient";

const create = async (payload: UserCreate): Promise<User> => {
    const user = await prisma.user.create({
      data: payload,
    });
  
    return user;
  };

  const read = async (): Promise<User[]> => {
    return await prisma.user.findMany();
  };
  const destroy = async (userId: number): Promise<void> => {
    await prisma.user.delete({
      where: { id: userId },
    });
  };


export default {create, read, destroy}