import { Request, Response } from "express";
import appointmentServices from "../services/appointment.services";

const create = async (req: Request, res: Response): Promise<void> => {
  const idUser: string = req.params.idUser;
  const idStaff: string = req.params.idStaff;
  const appointment = await appointmentServices.create(
    req.body,
    idStaff,
    idUser
  );
  res.status(201).json(appointment);
};

const read = async (req: Request, res: Response): Promise<void> => {
  const appointments = await appointmentServices.read();
  res.status(200).json(appointments);
};

const readOne = async (req: Request, res: Response): Promise<void> => {
  const appointmentId: string = req.params.id;
  const appointment = await appointmentServices.readOne(Number(appointmentId));
  res.status(200).json(appointment);
};

const destroy = async (req: Request, res: Response): Promise<void> => {
  await appointmentServices.destroy(res.locals.foundEntity.id);
  res.status(204).send();
};

export default { create, read, destroy, readOne };
