import { FastifyInstance } from "fastify";
import { createPassword } from "../controllers/createPassword";

export async function passwordRoutes(app: FastifyInstance) {
  app.post("/", createPassword);
}
