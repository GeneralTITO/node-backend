import { Router } from "express";
import middlewares from "../middlewares";
import { attendanceControllers } from "../controllers";
import { AttendanceCreateSchema } from "../schemas";


export const attendanceRouter: Router = Router();

attendanceRouter.get("", attendanceControllers.read);
attendanceRouter.get("/:id", middlewares.attendanceIdExists, attendanceControllers.readOne);
attendanceRouter.delete("/:id", middlewares.attendanceIdExists, attendanceControllers.destroy);
attendanceRouter.post("/:idStaff/:idUser", middlewares.validateBody(AttendanceCreateSchema), attendanceControllers.create);