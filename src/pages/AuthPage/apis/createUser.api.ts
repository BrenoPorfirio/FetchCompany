import { api } from "../../../services/api";

interface CreateUserProps {
  name: string;
  email: string;
  password: string;
}

export const createUser = (data: CreateUserProps) =>
  api.post(`/users`, { ...data });
