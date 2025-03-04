import { z } from "zod";
import { UrgencyLevelSchema } from "./UrgencyLevel.schemas";

const AttendanceSchema = z.object({
  id: z.number().int().positive(),
  patientId: z.number().int().positive(),
  employeeId: z.number().int().positive(),
  urgencyLevel: UrgencyLevelSchema,
  observations: z.string().optional(),
});

export { AttendanceSchema };
