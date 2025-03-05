import { Router } from "express";
import middlewares from "../middlewares";
import { UserCreateSchema } from "../schemas";
import { userControllers } from "../controllers";

export const userRouter: Router = Router();

userRouter.post("", middlewares.validateBody(UserCreateSchema), userControllers.create);
userRouter.get("", userControllers.read);
userRouter.get("/:id", userControllers.readOne);

userRouter.delete("/:id",middlewares.idExists, userControllers.destroy);
