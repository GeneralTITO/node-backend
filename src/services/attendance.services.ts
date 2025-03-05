
import { Attendances } from "@prisma/client";
import { AttendanceCreate } from "../interfaces";
import { prisma } from "../prismaClient";

const create = async (payload: AttendanceCreate): Promise<Attendances> => {
  const attendance = await prisma.attendances.create({
    data: payload,
  });

  return attendance;
};

const read = async (): Promise<Attendances[]> => {
  return await prisma.attendances.findMany();
};

const findById = async (attendanceId: number): Promise<Attendances | null> => {
  return await prisma.attendances.findUnique({
    where: { id: attendanceId },
    include: {
      patient: true,
      employee: true,
    },
  });
};

const destroy = async (attendanceId: number): Promise<void> => {
  await prisma.attendances.delete({
    where: { id: attendanceId },
  });
};

export default { create, read, findById, destroy };