import { z } from "zod";
import {
  PrescriptionSchema,
} from "../schemas";
import { Prisma } from "@prisma/client";
type Prescription = z.infer<typeof PrescriptionSchema>;
type PrescriptionCreate = Prisma.PrescriptionCreateInput;
type PrescriptionUpdate = Prisma.PrescriptionUpdateInput;

export { Prescription, PrescriptionCreate, PrescriptionUpdate };
