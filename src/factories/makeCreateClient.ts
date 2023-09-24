import { PrismaClientsRespository } from "../repositories/prisma/PrismaClientRepository";
import { CreateClientService } from "../services/createClient";

export function makeCreateClient() {
  const clientsRepository = new PrismaClientsRespository();
  const clientService = new CreateClientService(clientsRepository);

  return clientService;
}
