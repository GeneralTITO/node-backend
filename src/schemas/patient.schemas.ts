import { z } from "zod";
import { UrgencyLevelSchema } from "./UrgencyLevel.schemas";

const PatientSchema = z.object({
  id: z.number().int().positive(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  dateOfBirth: z.date(),
  gender: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email(),
  address: z.string().min(1),
  appointments: z.array(
    z.object({
      id: z.number().int().positive(),
      patientId: z.number().int().positive(),
      employeeId: z.number().int().positive(),
      appointmentDate: z.date(),
      diagnosis: z.string().optional(),
      notes: z.string().optional(),
    })
  ),
  attendances: z.array(
    z.object({
      id: z.number().int().positive(),
      patientId: z.number().int().positive(),
      employeeId: z.number().int().positive(),
      urgencyLevel: UrgencyLevelSchema,
      observations: z.string().optional(),
    })
  ),
});

export { PatientSchema };
