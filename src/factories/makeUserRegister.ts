import { PrismaUsersRespository } from "../repositories/prisma/PrismaUserRepository";
import { UserRegisterService } from "../services/userRegister";

export function makeUserRegister() {
  const usersRepository = new PrismaUsersRespository();
  const userService = new UserRegisterService(usersRepository);

  return userService;
}
