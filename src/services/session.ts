import { compare } from "bcrypt";
import { UsersRepository } from "../repositories/UserRespository";
import { TechnicianRepository } from "../repositories/TechnicianRepository";

interface SessionProps {
  email: string;
  password: string;
  role: "user" | "technician";
}

export class SessionService {
  constructor(
    private usersRepository: UsersRepository,
    private techniciansRepository: TechnicianRepository
  ) {}

  async create({ email, password, role }: SessionProps) {
    if (role === "user") {
      const user = await this.usersRepository.findByEmail(email);

      if (!user) {
        throw new Error("userNotFound");
      }

      const passwordMatchs = await compare(password, user.password);

      if (!passwordMatchs) throw new Error("Invalid credentials");

      return { user };
    } else {
      const user = await this.techniciansRepository.findByEmail(email);

      if (!user) {
        throw new Error("userNotFound");
      }

      const passwordMatchs = await compare(password, user.password);

      if (!passwordMatchs) throw new Error("Invalid credentials");

      return { user };
    }
  }
}
