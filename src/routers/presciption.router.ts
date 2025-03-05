import { Router } from "express";
import middlewares from "../middlewares";
import { PrescriptionCreateSchema } from "../schemas";
import { prescriptionControllers } from "../controllers";


export const presciptionRouter: Router = Router();

presciptionRouter.get("/:idAppointment", prescriptionControllers.read);
presciptionRouter.delete("/:id", middlewares.presciptionIdExists, prescriptionControllers.destroy);
presciptionRouter.post("/:idAppointment", middlewares.validateBody(PrescriptionCreateSchema), prescriptionControllers.create);