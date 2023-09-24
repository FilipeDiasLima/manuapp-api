import { FastifyInstance } from "fastify";
import {
  userRegister,
  technicianRegister,
  clientRegister,
} from "../controllers/register";

export async function registerRoutes(app: FastifyInstance) {
  app.post("/user", userRegister);
  app.post("/technician", technicianRegister);
  app.post("/client", clientRegister);
}
