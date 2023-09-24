import { FastifyReply, FastifyRequest } from "fastify";
import { makeGetClients } from "../../factories/makeGetClients";

export async function getClients(request: FastifyRequest, reply: FastifyReply) {
  const clientService = makeGetClients();

  const { clients } = await clientService.create(request.user.id);

  return clients;
}
