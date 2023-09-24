import { FastifyReply, FastifyRequest } from "fastify";

export function verifyUserRole(rolesToVerify: "user" | "technician") {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const { role } = request.user;

    if (!rolesToVerify.includes(role)) {
      return reply.status(403).send({ message: "Unauthorized" });
    }
  };
}
