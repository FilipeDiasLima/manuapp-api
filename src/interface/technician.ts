export interface TechnicianInterface {
  id: string;
  name: string;
  email: string;
  password: string;
  cpfCnpj: string;
  phone: string;
}

export interface TechnicianRegisterInterface {
  name: string;
  email: string;
  password: string;
  cpfCnpj: string;
  phone: string;
  creaCFT?: string;
  cep?: string;
  address?: string;
  houseNumber?: string;
  district?: string;
  complement?: string;
  city?: string;
  country?: string;
  state?: string;
  avatar?: string;
}

export interface TechnicianPrismaInterface {
  id: string;
  name: string;
  email: string;
  password: string;
  cpfCnpj: string;
  phone: string;
  creaCFT: string | null;
  status: string | null;
  cep: string | null;
  address: string | null;
  houseNumber: string | null;
  district: string | null;
  complement: string | null;
  city: string | null;
  country: string | null;
  state: string | null;
  avatar: string | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  pmocId: string | null;
}
