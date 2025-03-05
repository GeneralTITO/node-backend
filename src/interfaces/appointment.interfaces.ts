import { z } from "zod";
import {
  AppointmentSchema,
} from "../schemas";
import { Prisma } from "@prisma/client";
type Appointment = z.infer<typeof AppointmentSchema>;
type AppointmentCreate = Prisma.AppointmentCreateInput;
type AppointmentUpdate = Prisma.AppointmentUpdateInput;

export { Appointment, AppointmentCreate, AppointmentUpdate };
