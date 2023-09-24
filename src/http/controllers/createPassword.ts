import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeCreatePassword } from "../../factories/makeCreatePassword";

export async function createPassword(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const createPasswordBodySchema = z.object({
    password: z.string().min(6).max(64),
  });

  const { password } = createPasswordBodySchema.parse(request.body);

  const createPasswordService = makeCreatePassword();

  await createPasswordService.create({
    userId: request.user.id,
    password,
  });

  return reply.status(200).send({
    message: "Senha criada com sucesso.",
  });
}
