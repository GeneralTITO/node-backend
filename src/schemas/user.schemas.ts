import { z } from "zod";

const RoleSchema = z.enum(['Doctor', 'Staff', 'Patient']);

const UserSchema = z.object({
  id: z.number().int().positive(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  dateOfBirth: z.date(),
  gender: z.string().min(1),
  role: RoleSchema,
  phone: z.string().nullable().optional(), 
  email: z.string().email().nullable().optional(), 
  address: z.string().nullable().optional(), 
  appointmentsPatient: z.array(
    z.object({
      id: z.number().int().positive(),
      patientId: z.number().int().positive(),
      employeeId: z.number().int().positive(),
      appointmentDate: z.date(),
      diagnosis: z.string().optional(),
      notes: z.string().optional(),
    })
  ).optional(),
  appointmentsEmployee: z.array(
    z.object({
      id: z.number().int().positive(),
      patientId: z.number().int().positive(),
      employeeId: z.number().int().positive(),
      appointmentDate: z.date(),
      diagnosis: z.string().optional(),
      notes: z.string().optional(),
    })
  ).optional(),
  attendancesPatient: z.array(
    z.object({
      id: z.number().int().positive(),
      patientId: z.number().int().positive(),
      employeeId: z.number().int().positive(),
      urgencyLevel: z.enum(['Low', 'Medium', 'High', 'Emergency']), 
      observations: z.string().optional(),
    })
  ).optional(),
  attendancesEmployee: z.array(
    z.object({
      id: z.number().int().positive(),
      patientId: z.number().int().positive(),
      employeeId: z.number().int().positive(),
      urgencyLevel: z.enum(['Low', 'Medium', 'High', 'Emergency']),
      observations: z.string().optional(),
    })
  ).optional(),
});
const UserReturnSchema = UserSchema.omit({
    appointmentsPatient: true,
    appointmentsEmployee: true,
    attendancesPatient: true,
    attendancesEmployee: true,
  });
const UserCreateSchema = UserSchema.omit({
  id: true,
  appointmentsPatient: true,
  appointmentsEmployee: true,
  attendancesPatient: true,
  attendancesEmployee: true,
});

const UserUpdateSchema = UserCreateSchema.partial();

export { UserSchema, UserCreateSchema, UserUpdateSchema ,UserReturnSchema};