import { z } from "zod";
import {
  AttendanceSchema,
} from "../schemas";
import { Prisma } from "@prisma/client";
type Attendance = z.infer<typeof AttendanceSchema>;
type AttendanceCreate = Prisma.AttendanceCreateInput;
type AttendanceUpdate = Prisma.AttendanceUpdateInput;

export { Attendance, AttendanceCreate, AttendanceUpdate };
