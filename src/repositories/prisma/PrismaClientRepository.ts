import { prisma } from "../../../database/prisma";
import {
  ClientInterface,
  ClientRegisterInterface,
} from "../../interface/client";
import { ClientsRepository } from "../ClientRespository";

export class PrismaClientsRespository implements ClientsRepository {
  async findByEmail(email: string): Promise<ClientInterface | null> {
    const user = await prisma.client.findFirst({
      where: {
        email,
      },
    });

    return user;
  }

  async register(data: ClientRegisterInterface): Promise<void> {
    const client = await prisma.client.create({
      data,
      select: {
        id: true,
      },
    });

    if (!client.id) throw new Error("Create client failed");

    return;
  }
}
