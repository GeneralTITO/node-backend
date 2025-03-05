import { Request, Response } from "express";
import userServices from "../services/user.services";
import { User } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: User = await userServices.create(req.body);

  return res.status(201).json(user);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const users = userServices.read;
  return res.status(200).json(users);
};
const destroy = async (req: Request, res: Response): Promise<Response> => {
  userServices.destroy(res.locals.foundEntity);

  return res.status(204);
};

export default { create, read, destroy };
