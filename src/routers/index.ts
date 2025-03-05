import { Router } from "express";
import { userRouter } from "./user.router";
import { appointmentRouter } from "./appointment.router";


export const router: Router = Router();

router.use("/users", userRouter);
router.use("/appointments", appointmentRouter);

export default router;