import { z } from "zod";
import {
  AppointmentSchema,
} from "../schemas";
import { Prisma } from "@prisma/client";
type Appointment = z.infer<typeof AppointmentSchema>;
type AppointmentCreate = Prisma.AppointmentsCreateInput;
type AppointmentUpdate = Prisma.AppointmentsUpdateInput;

export { Appointment, AppointmentCreate, AppointmentUpdate };
