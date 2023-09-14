import { FastifyInstance } from "fastify";
import { authenticate } from "../controllers/authenticate";

export async function loginRoutes(app: FastifyInstance) {
  app.post("/", authenticate)
}