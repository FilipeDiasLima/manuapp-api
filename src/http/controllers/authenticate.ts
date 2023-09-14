import { FastifyReply, FastifyRequest } from "fastify";
import { makeSessionsService } from "../../factories/makeSessionService";

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
  const { email, password } = request.body as { email: string, password: string }

  const sessionService = makeSessionsService()

  const { user } = await sessionService.create({
    email, 
    password
  })

  const token = await reply.jwtSign({
    id: user.id,
  })

  return reply.status(200).send({
    user,
    token
  })
}