import { FastifyReply, FastifyRequest } from "fastify";
import { makeUserRegister } from "../../factories/makeUserRegister";
import { z } from "zod";
import { makeTechnicianRegister } from "../../factories/makeTechnicianRegister";
import { makeCreateClient } from "../../factories/makeCreateClient";

export async function userRegister(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string(),
    phone: z.string().length(11),
    password: z.string().min(6).max(64),
    cnpj: z.string(),
    avatar: z.string(),
    cep: z.string().length(8),
    address: z.string(),
    houseNumber: z.string(),
    district: z.string(),
    complement: z.string(),
    city: z.string(),
    country: z.string(),
    state: z.string(),
  });

  const {
    address,
    avatar,
    cep,
    city,
    complement,
    country,
    cnpj,
    district,
    email,
    houseNumber,
    name,
    password,
    phone,
    state,
  } = registerBodySchema.parse(request.body);

  const registerService = makeUserRegister();

  const { user } = await registerService.create({
    name,
    email,
    password,
    cnpj,
    phone,
    address,
    avatar,
    cep,
    city,
    complement,
    country,
    district,
    houseNumber,
    state,
  });

  return reply.status(200).send({
    user,
  });
}

export async function technicianRegister(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6).max(64),
    cpfCnpj: z.string(),
    phone: z.string().length(11),
    creaCFT: z.string(),
    cep: z.string().length(8),
    address: z.string(),
    houseNumber: z.string(),
    district: z.string(),
    complement: z.string(),
    city: z.string(),
    country: z.string(),
    state: z.string(),
    avatar: z.string(),
  });

  const {
    address,
    avatar,
    cep,
    city,
    complement,
    country,
    cpfCnpj,
    creaCFT,
    district,
    email,
    houseNumber,
    name,
    password,
    phone,
    state,
  } = registerBodySchema.parse(request.body);

  const registerService = makeTechnicianRegister();

  const { technician } = await registerService.create({
    name,
    email,
    password,
    cpfCnpj,
    phone,
    address,
    avatar,
    cep,
    city,
    complement,
    country,
    creaCFT,
    district,
    houseNumber,
    state,
  });

  return reply.status(200).send({
    technician,
  });
}

export async function clientRegister(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    cpfCnpj: z.string(),
    phone: z.string().min(10).max(11),
    mainTechnician: z.string(),
    cep: z.string().length(8),
    address: z.string(),
    houseNumber: z.string(),
    district: z.string(),
    complement: z.string(),
    city: z.string(),
    country: z.string(),
    state: z.string(),
    avatar: z.string(),
  });

  const {
    address,
    avatar,
    cep,
    city,
    complement,
    country,
    cpfCnpj,
    district,
    email,
    houseNumber,
    mainTechnician,
    name,
    phone,
    state,
  } = registerBodySchema.parse(request.body);

  const clientService = makeCreateClient();

  await clientService.create({
    address,
    avatar,
    cep,
    city,
    complement,
    country,
    cpfCnpj,
    district,
    email,
    houseNumber,
    mainTechnician,
    name,
    phone,
    state,
  });
}
