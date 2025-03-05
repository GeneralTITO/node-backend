// appointmentService.ts
import { Appointments } from "@prisma/client";
import {Appointment, AppointmentCreate } from "../interfaces";
import { prisma } from "../prismaClient";

const create = async (payload: AppointmentCreate): Promise<Appointments> => {
  const appointment = await prisma.appointments.create({
    data: payload,
  });

  return appointment;
};

const read = async (): Promise<Appointments[]> => {
  return await prisma.appointments.findMany();
};

const findById = async (appointmentId: number): Promise<Appointments | null> => {
  return await prisma.appointments.findUnique({
    where: { id: appointmentId },
    include: {
      patient: true,
      employee: true,
      prescriptions: true,
    },
  });
};

const destroy = async (appointmentId: number): Promise<void> => {
  await prisma.appointments.delete({
    where: { id: appointmentId },
  });
};

export default { create, read, findById, destroy };