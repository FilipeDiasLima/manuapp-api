export interface UserInterface {
  id: string;
  name: string;
  email: string;
  password: string;
  cnpj: string;
  phone: string;
}

export interface UserRegisterInterface {
  name: string;
  email: string;
  phone: string;
  password: string;
  cnpj: string;
  avatar?: string;
  cep?: string;
  address?: string;
  houseNumber?: string;
  district?: string;
  complement?: string;
  city?: string;
  country?: string;
  state?: string;
}

export interface UserPrismaInterface {
  id: string;
  name: string;
  email: string;
  emailVerified?: Date;
  phone: string;
  password: string;
  cnpj: string;
  avatar?: string;
  cep?: string;
  address?: string;
  houseNumber?: string;
  district?: string;
  complement?: string;
  city?: string;
  country?: string;
  state?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
