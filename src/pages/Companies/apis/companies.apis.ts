import { api } from "../../../services/api";

interface CreateCompanyProps {
  userId: number;
  name: string;
  website: string;
  cnpj: string;
}

interface UpdateCompanyProps {
  name: string;
  website: string;
  cnpj: string;
}

export const getCompanies = (userId: number) =>
  api.get(`/companies/users/${userId}`);

export const createCompany = (data: CreateCompanyProps) =>
  api.post(`/companies`, { ...data });

export const editCompany = (companyId: number, data: UpdateCompanyProps) =>
  api.put(`/companies/${companyId}`, { ...data });

export const deleteCompany = (companyId: number) =>
  api.delete(`/companies/${companyId}`);
