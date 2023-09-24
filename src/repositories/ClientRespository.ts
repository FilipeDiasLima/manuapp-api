import { ClientInterface, ClientRegisterInterface } from "../interface/client";

export interface ClientsRepository {
  findByEmail(email: string): Promise<ClientInterface | null>;
  register(data: ClientRegisterInterface): Promise<void>;
  getAll(userId: string): Promise<ClientInterface[] | []>;
}
