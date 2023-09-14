import fastify from "fastify";
import fastifyJwt from "@fastify/jwt";
import cors from "@fastify/cors";
import { routes } from "./http/routes";

const jwtSecret = process.env.JWT_SECRET || "teste";
const jwtExpiresIn = process.env.JWT_EXPIRES_IN || "1d";

const app = fastify();

app.register(cors, {
  origin: true,
});

app.register(fastifyJwt, {
  secret: jwtSecret,
  sign: {
    expiresIn: jwtExpiresIn,
  },
});

app.register(routes);

export default app;