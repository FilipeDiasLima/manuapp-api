import { PrismaTechnicianRepository } from "../repositories/prisma/PrismaTechnicianRepository";
import { CreatePasswordService } from "../services/createPassword";

export function makeCreatePassword() {
  const techniciansRepository = new PrismaTechnicianRepository();
  const technicianService = new CreatePasswordService(techniciansRepository);

  return technicianService;
}
