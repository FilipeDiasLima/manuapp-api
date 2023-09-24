import bcrypt from "bcrypt";
import { TechnicianRegisterInterface } from "../interface/technician";
import { TechnicianRepository } from "../repositories/TechnicianRepository";

export class TechnicianRegisterService {
  constructor(private techniciansRepository: TechnicianRepository) {}

  async create(data: TechnicianRegisterInterface) {
    const technician = await this.techniciansRepository.findByEmail(data.email);

    if (technician) {
      throw new Error("Technician already exists!");
    }

    const hashedPassword = await bcrypt.hash(data.password, 12);

    data.password = hashedPassword;

    const newTechnician = await this.techniciansRepository.register(data);

    return { technician: newTechnician };
  }
}
