import { Attendances } from "@prisma/client";
import { AttendanceCreate } from "../interfaces";
import { prisma } from "../prismaClient";
import { AppError } from "../errors";

const create = async (
    payload: AttendanceCreate,
    idStaff: string,
    idUser: string
  ): Promise<Attendances> => {
    if (!idStaff || !idUser) {
      throw new AppError(
        "Both patient and employee must be provided with valid IDs",
        400
      );
    }
  
    const numberIdStaff = Number(idStaff);
    const numberIdUser = Number(idUser);
  
    const employeeExists = await prisma.user.findUnique({
      where: { id: numberIdStaff },
    });
    if (!employeeExists) {
      throw new AppError("Employee not found", 404);
    }
  
    const patientExists = await prisma.user.findUnique({
      where: { id: numberIdUser },
    });
    if (!patientExists) {
      throw new AppError("Patient not found", 404);
    }
  
    const attendanceData: any = {
        patientsId: numberIdUser,
        employeeId: numberIdStaff,
        urgencyLevel: payload.urgencyLevel,
        observations: payload.observations,
      };
    
      const attendance = await prisma.attendances.create({
        data: attendanceData,
      });
    
      return attendance;
  };

const read = async (): Promise<Attendances[]> => {
  return await prisma.attendances.findMany();
};

const readOne = async (appointmentId: number): Promise<any> => {
  const appointment = await prisma.attendances.findUnique({
    where: { id: appointmentId },
  });
  return appointment;
};

const destroy = async (appointmentId: number): Promise<void> => {
  await prisma.attendances.delete({
    where: { id: appointmentId },
  });
};

export default { create, read, destroy, readOne };
