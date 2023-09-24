import { prisma } from "../../../database/prisma";
import {
  TechnicianInterface,
  TechnicianPrismaInterface,
  TechnicianRegisterInterface,
} from "../../interface/technician";
import { TechnicianRepository } from "../TechnicianRepository";

export class PrismaTechnicianRepository implements TechnicianRepository {
  async findByEmail(email: string): Promise<TechnicianInterface | null> {
    const technician = await prisma.technician.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        cpfCnpj: true,
        phone: true,
      },
    });

    return technician;
  }

  async findById(userId: string): Promise<TechnicianPrismaInterface | null> {
    const technician = await prisma.technician.findFirst({
      where: {
        id: userId,
      },
    });

    return technician;
  }

  async register({
    cpfCnpj,
    email,
    name,
    password,
    phone,
    address,
    avatar,
    cep,
    city,
    complement,
    country,
    creaCFT,
    district,
    houseNumber,
    state,
  }: TechnicianRegisterInterface): Promise<TechnicianInterface> {
    const technician = await prisma.technician.create({
      data: {
        cpfCnpj,
        email,
        name,
        password,
        phone,
        address,
        avatar,
        cep,
        city,
        complement,
        country,
        creaCFT,
        district,
        houseNumber,
        state,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        cpfCnpj: true,
        phone: true,
      },
    });

    if (!technician.id) throw new Error("Register failed");

    return technician;
  }

  async createPassword(userId: string, password: string): Promise<void> {
    const technician = await prisma.technician.update({
      where: {
        id: userId,
      },
      data: {
        password,
      },
      select: {
        id: true,
      },
    });

    if (!technician.id) throw new Error("Create password failed");

    return;
  }
}
