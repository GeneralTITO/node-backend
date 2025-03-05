import { Request, Response } from "express";
import userServices from "../services/user.services";
import { User } from "../interfaces";

const create = async (req: Request, res: Response): Promise<void> => {
  const user: User = await userServices.create(req.body);
  res.status(201).json(user);
};

const read = async (req: Request, res: Response): Promise<void> => {
  const users = await userServices.read(); // Assumindo que é uma função assíncrona
  res.status(200).json(users);
};

const destroy = async (req: Request, res: Response): Promise<void> => {
  await userServices.destroy(res.locals.foundEntity);
  res.status(204).send();
};

export default { create, read, destroy };