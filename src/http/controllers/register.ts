import { FastifyReply, FastifyRequest } from "fastify";
import { makeRegisterUser } from "../../factories/makeRegisterUser";
import { UserRegisterInterface } from "../../interface/user";

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const { name, email, password, cnpj } = request.body as UserRegisterInterface;

  const registerService = makeRegisterUser();

  const { user } = await registerService.create({
    name,
    email,
    password,
    cnpj,
  });

  return reply.status(200).send({
    user,
  });
}
