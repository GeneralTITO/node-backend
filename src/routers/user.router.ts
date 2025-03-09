import { Router } from "express";
import middlewares from "../middlewares";
import { UserCreateSchema } from "../schemas";
import { userControllers } from "../controllers";

export const userRouter: Router = Router();

userRouter.post("", middlewares.verifyToken, middlewares.validateBody(UserCreateSchema),middlewares.uniqueEmail, userControllers.create);
userRouter.get("", middlewares.verifyToken, userControllers.read);
userRouter.get("/:id", middlewares.verifyToken, userControllers.readOne);

userRouter.delete("/:id",middlewares.verifyToken, middlewares.idExists, userControllers.destroy);
