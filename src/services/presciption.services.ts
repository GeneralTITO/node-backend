// prescriptionService.ts

import { Prescriptions } from "@prisma/client";
import { prisma } from "../prismaClient";
import { PrescriptionCreate } from "../interfaces";

const create = async (payload: PrescriptionCreate): Promise<Prescriptions> => {
  const prescription = await prisma.prescriptions.create({
    data: payload,
  });

  return prescription;
};

const read = async (): Promise<Prescriptions[]> => {
  return await prisma.prescriptions.findMany();
};

const findByAppointmentId = async (appointmentId: number): Promise<Prescriptions[]> => {
  return await prisma.prescriptions.findMany({
    where: { appointmentId },
  });
};

const destroy = async (prescriptionId: number): Promise<void> => {
  await prisma.prescriptions.delete({
    where: { id: prescriptionId },
  });
};

export default { create, read, findByAppointmentId, destroy };