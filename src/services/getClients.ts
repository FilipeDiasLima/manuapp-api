import { ClientsRepository } from "../repositories/ClientRespository";

export class GetClientsService {
  constructor(private clientsRepository: ClientsRepository) {}

  async create(userId: string) {
    const clients = await this.clientsRepository.getAll(userId);

    return {
      clients,
    };
  }
}
