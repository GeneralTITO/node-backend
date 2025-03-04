import { z } from "zod";
import { UrgencyLevelSchema } from "./UrgencyLevel.schemas";

const EmployeeSchema = z.object({
  id: z.number().int().positive(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  role: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email(),
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

const EmployeeCreateSchema = EmployeeSchema.omit({
  id: true,
  appointments: true,
  attendances: true,
});

const EmployeeUpdateSchema = EmployeeCreateSchema.partial();

export { EmployeeSchema, EmployeeCreateSchema, EmployeeUpdateSchema };
