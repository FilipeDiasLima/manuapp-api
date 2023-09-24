import { PrismaUsersRespository } from "../repositories/prisma/PrismaUserRepository";
import { PrismaTechnicianRepository } from "../repositories/prisma/PrismaTechnicianRepository";
import { SessionService } from "../services/session";

export function makeSessionsService() {
  const usersRepository = new PrismaUsersRespository();
  const technicianRepository = new PrismaTechnicianRepository();
  const sessionService = new SessionService(
    usersRepository,
    technicianRepository
  );

  return sessionService;
}
