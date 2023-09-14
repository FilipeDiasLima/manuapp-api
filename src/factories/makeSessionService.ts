import { PrismaUsersRespository } from "../repositories/prisma/PrismaUserRepository";
import { SessionService } from "../services/session";

export function makeSessionsService() {
  const usersRepository = new PrismaUsersRespository();
  const sessionService = new SessionService(usersRepository);

  return sessionService;
}
