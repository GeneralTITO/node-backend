import { Request, Response } from "express";
import userServices from "../services/user.services";

const create = async (req: Request, res: Response): Promise<void> => {
  const user= await userServices.create(req.body);
  res.status(201).json(user);
};

const read = async (req: Request, res: Response): Promise<void> => {
  const users = await userServices.read();
  res.status(200).json(users);
};

const readOne = async (req: Request, res: Response): Promise<void> => {
  const userId: string = req.params.id;
  const user = await userServices.readOne(Number(userId));
  res.status(200).json(user);
};

const destroy = async (req: Request, res: Response): Promise<void> => {
  await userServices.destroy(res.locals.foundEntity.id);
  res.status(204).send();
};

export default { create, read, destroy, readOne };
