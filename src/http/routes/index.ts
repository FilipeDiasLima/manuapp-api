import { FastifyInstance } from "fastify";
import { loginRoutes } from "./login";
import { registerRoutes } from "./register";

export async function routes(app: FastifyInstance) {
  app.get("/", (request, reply) => {
    return reply.status(200).send({ message: "Server is running!" });
  });

  app.register(loginRoutes, { prefix: "/login" });
  app.register(registerRoutes, { prefix: "/register" });
}
