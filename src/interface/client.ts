export interface ClientInterface {
  id: string;
  name: string;
  email: string;
  cpfCnpj: string;
  phone: string;
  mainTechnician: string | null;
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
}

export interface ClientRegisterInterface {
  name: string;
  email: string;
  cpfCnpj: string;
  phone: string;
  mainTechnician?: string;
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
