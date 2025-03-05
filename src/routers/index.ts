import { Router } from "express";
import { userRouter } from "./user.router";
import { appointmentRouter } from "./appointment.router";
import { attendanceRouter } from "./attendance.router";
import { presciptionRouter } from "./presciption.router";

export const router: Router = Router();

router.use("/users", userRouter);
router.use("/appointments", appointmentRouter);
router.use("/attendance", attendanceRouter);
router.use("/prescription", presciptionRouter);




export default router;