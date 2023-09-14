export interface UserInterface {
  id: string;
  name: string;
  email: string;
  password: string;
  cnpj: string;
}

export interface UserRegisterInterface {
  name: string;
  email: string;
  password: string;
  cnpj: string;
}

export interface UserPrismaInterface {
  id: string;
  name: string;
  email: string;
  emailVerified?: Date;
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
