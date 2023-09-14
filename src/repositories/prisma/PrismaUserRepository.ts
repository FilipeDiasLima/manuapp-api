import { prisma } from "../../../database/prisma";
import { UserInterface, UserRegisterInterface } from "../../interface/user";
import { UsersRepository } from "../UserRespository";

export class PrismaUsersRespository implements UsersRepository {
  async findByEmail(email: string): Promise<UserInterface | null> {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        cnpj: true,
      },
    });

    return user;
  }

  async register(data: UserRegisterInterface): Promise<UserInterface> {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        cnpj: data.cnpj,
      },
      select: {
        id: true,
        name: true,
        email: true,
        cnpj: true,
        password: true,
      },
    });

    if (!user.id) throw new Error("Register failed");

    return user;
  }
}
