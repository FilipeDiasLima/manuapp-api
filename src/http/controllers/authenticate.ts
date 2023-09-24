import { FastifyReply, FastifyRequest } from "fastify";
import { makeSessionsService } from "../../factories/makeSessionService";
import { z } from "zod";

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const sessionBodySchema = z.object({
    email: z.string().email(),
    password: z.string(),
    role: z.union([z.literal("user"), z.literal("technician")]),
  });

  const { email, password, role } = sessionBodySchema.parse(request.body);

  const sessionService = makeSessionsService();

  const { user } = await sessionService.create({
    email,
    password,
    role,
  });

  const token = await reply.jwtSign({
    id: user.id,
    role,
  });

  return reply.status(200).send({
    user,
    token,
  });
}
