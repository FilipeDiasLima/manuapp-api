import { compare } from "bcrypt";
import { UsersRepository } from "../repositories/UserRespository";

interface SessionProps {
  email: string;
  password: string;
}

export class SessionService {
  constructor(private usersRepository: UsersRepository) {}

  async create({ email, password }: SessionProps) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error("User not found!");
    }

    const passwordMatchs = await compare(password, user.password);

    if (!passwordMatchs) throw new Error("Invalid credentials");

    return { user };
  }
}
