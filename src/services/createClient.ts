import bcrypt from "bcrypt";
import { ClientsRepository } from "../repositories/ClientRespository";
import { ClientRegisterInterface } from "../interface/client";
import { UsersRepository } from "../repositories/UserRespository";

export class CreateClientService {
  constructor(private clientsRepository: ClientsRepository) {}

  async create(data: ClientRegisterInterface) {
    const client = await this.clientsRepository.findByEmail(data.email);

    if (client?.id) throw new Error("Client already exists");

    await this.clientsRepository.register(data);

    return;
  }
}
