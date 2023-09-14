import { PrismaUsersRespository } from "../repositories/prisma/PrismaUserRepository";
import { RegisterService } from "../services/register";

export function makeRegisterUser() {
  const usersRepository = new PrismaUsersRespository();
  const userService = new RegisterService(usersRepository);

  return userService;
}
