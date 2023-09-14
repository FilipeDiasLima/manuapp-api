import { UserInterface, UserRegisterInterface } from "../interface/user";

export interface UsersRepository {
  findByEmail(email: string): Promise<UserInterface | null>;
  register(data: UserRegisterInterface): Promise<UserInterface | null>;
}
