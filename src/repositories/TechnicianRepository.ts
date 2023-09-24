import {
  TechnicianInterface,
  TechnicianPrismaInterface,
  TechnicianRegisterInterface,
} from "../interface/technician";

export interface TechnicianRepository {
  findByEmail(email: string): Promise<TechnicianInterface | null>;
  findById(userId: string): Promise<TechnicianPrismaInterface | null>;
  register(
    data: TechnicianRegisterInterface
  ): Promise<TechnicianInterface | null>;
  createPassword(userId: string, password: string): Promise<void>;
}
