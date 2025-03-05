import { Appointments } from "@prisma/client";
import { AppointmentCreate } from "../interfaces";
import { prisma } from "../prismaClient";
import { AppError } from "../errors";

const create = async (
    payload: AppointmentCreate,
    idStaff: string,
    idUser: string
  ): Promise<Appointments> => {
    
    if (!idStaff || !idUser) {
      throw new AppError(
        "Both patient and employee must be provided with valid IDs",
        400
      );
    }
  
    // Convert string IDs to numbers
    const numberIdStaff = Number(idStaff);
    const numberIdUser = Number(idUser);
  
    // Check if employee exists
    const employeeExists = await prisma.user.findUnique({
      where: { id: numberIdStaff },
    });
    if (!employeeExists) {
      throw new AppError("Employee not found", 404);
    }
  
    // Check if patient exists
    const patientExists = await prisma.user.findUnique({
      where: { id: numberIdUser },
    });
    if (!patientExists) {
      throw new AppError("Patient not found", 404);
    }
  
    const appointmentData: any = {
      patientId: numberIdUser,
      employeeId: numberIdStaff,
      appointmentDate: typeof payload.appointmentDate === "string" 
        ? new Date(payload.appointmentDate) 
        : payload.appointmentDate,
      diagnosis: payload.diagnosis,
      notes: payload.notes,
    };
  
    const appointment = await prisma.appointments.create({
      data: appointmentData,
    });
  
    return appointment;
  };

const read = async (): Promise<Appointments[]> => {
  return await prisma.appointments.findMany();
};

const readOne = async (appointmentId: number): Promise<any> => {
  const appointment = await prisma.appointments.findUnique({
    where: { id: appointmentId },
  });
  return appointment;
};

const destroy = async (appointmentId: number): Promise<void> => {
  await prisma.appointments.delete({
    where: { id: appointmentId },
  });
};

export default { create, read, destroy, readOne };
