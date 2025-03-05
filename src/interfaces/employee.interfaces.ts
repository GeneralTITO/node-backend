import { z } from "zod";
import {
  EmployeeSchema,
} from "../schemas";
import { Prisma } from "@prisma/client";
type Employee = z.infer<typeof EmployeeSchema>;
type EmployeeCreate = Prisma.EmployeeCreateInput;
type EmployeeUpdate = Prisma.EmployeeUpdateInput;

export { Employee, EmployeeCreate, EmployeeUpdate };
