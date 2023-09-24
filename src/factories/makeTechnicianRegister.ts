import { PrismaTechnicianRepository } from "../repositories/prisma/PrismaTechnicianRepository";
import { TechnicianRegisterService } from "../services/technicianRegister";

export function makeTechnicianRegister() {
  const techniciansRepository = new PrismaTechnicianRepository();
  const technicianService = new TechnicianRegisterService(
    techniciansRepository
  );

  return technicianService;
}
