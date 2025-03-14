import { Router } from "express";
import middlewares from "../middlewares";
import { PrescriptionCreateSchema } from "../schemas";
import { prescriptionControllers } from "../controllers";


export const presciptionRouter: Router = Router();

presciptionRouter.get("/:idAppointment", middlewares.verifyToken,prescriptionControllers.read);
presciptionRouter.delete("/:id", middlewares.verifyToken,middlewares.presciptionIdExists, prescriptionControllers.destroy);
presciptionRouter.post("/:idAppointment", middlewares.verifyToken,middlewares.validateBody(PrescriptionCreateSchema), prescriptionControllers.create);