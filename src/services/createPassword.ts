import bcrypt from "bcrypt";
import { TechnicianRepository } from "../repositories/TechnicianRepository";

interface CreatePasswordProps {
  userId: string;
  password: string;
}

export class CreatePasswordService {
  constructor(private techniciansRepository: TechnicianRepository) {}

  async create({ userId, password }: CreatePasswordProps) {
    const user = await this.techniciansRepository.findById(userId);

    if (user) {
      throw new Error("User not found!");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await this.techniciansRepository.createPassword(userId, hashedPassword);

    return;
  }
}
