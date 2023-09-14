import { UsersRepository } from "../repositories/UserRespository";
import { UserRegisterInterface } from "../interface/user";
import bcrypt from "bcrypt";

export class RegisterService {
  constructor(private usersRepository: UsersRepository) {}

  async create(data: UserRegisterInterface) {
    const user = await this.usersRepository.findByEmail(data.email);

    if (user) {
      throw new Error("User already exists!");
    }

    const hashedPassword = await bcrypt.hash(data.password, 12);

    data.password = hashedPassword;

    const newUser = await this.usersRepository.register(data);

    return { user: newUser };
  }
}
