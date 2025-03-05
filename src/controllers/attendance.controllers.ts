import { Request, Response } from "express";
import attendanceServices from "../services/attendance.services";

const create = async (req: Request, res: Response): Promise<void> => {
  const idUser: string = req.params.idUser;
  const idStaff: string = req.params.idStaff;
  const attendance = await attendanceServices.create(
    req.body,
    idStaff,
    idUser
  );
  res.status(201).json(attendance);
};

const read = async (req: Request, res: Response): Promise<void> => {
  const attendances = await attendanceServices.read();
  res.status(200).json(attendances);
};

const readOne = async (req: Request, res: Response): Promise<void> => {
  const attendanceId: string = req.params.id;
  const attendance = await attendanceServices.readOne(Number(attendanceId));
  res.status(200).json(attendance);
};

const destroy = async (req: Request, res: Response): Promise<void> => {
  await attendanceServices.destroy(res.locals.foundEntity.id);
  res.status(204).send();
};

export default { create, read, destroy, readOne };