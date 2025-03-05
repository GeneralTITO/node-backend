import { z } from "zod";
import {
  PatientSchema,
} from "../schemas";
import { Prisma } from "@prisma/client";
type Patient = z.infer<typeof PatientSchema>;
type PatientCreate = Prisma.PatientCreateInput;
type PatientUpdate = Prisma.PatientUpdateInput;

export { Patient, PatientCreate, PatientUpdate };
