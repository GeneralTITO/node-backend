import { Router } from "express";
import middlewares from "../middlewares";
import { AppointmentCreateSchema } from "../schemas";
import { appointmentControllers } from "../controllers";


export const appointmentRouter: Router = Router();

appointmentRouter.get("", appointmentControllers.read);
appointmentRouter.get("/:id", middlewares.appointmentIdExists, appointmentControllers.readOne);
appointmentRouter.delete("/:id", middlewares.appointmentIdExists, appointmentControllers.destroy);
appointmentRouter.post("/:idStaff/:idUser", middlewares.validateBody(AppointmentCreateSchema), appointmentControllers.create);