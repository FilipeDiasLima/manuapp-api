import { PrismaClientsRespository } from "../repositories/prisma/PrismaClientRepository";
import { GetClientsService } from "../services/getClients";

export function makeGetClients() {
  const clientsRepository = new PrismaClientsRespository();
  const clientService = new GetClientsService(clientsRepository);

  return clientService;
}
