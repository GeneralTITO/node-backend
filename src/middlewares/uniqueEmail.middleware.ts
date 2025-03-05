import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client"; // Importando o PrismaClient
import { AppError } from "../errors";

// Instanciando o PrismaClient
const prisma = new PrismaClient();

export const uniqueEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email: string = req.body.email;
  
  if (!email) return next();

  try {
    const foundUser = await prisma.user.findUnique({
      where: { email }
    });

    if (foundUser) {
      throw new AppError("Email already exists", 409);
    }

    return next();
  } catch (error) {
    next(error);
  }
};