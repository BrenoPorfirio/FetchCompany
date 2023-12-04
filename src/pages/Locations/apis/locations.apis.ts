import { api } from "../../../services/api";

interface CreateLocationProps {
  name: string;
  city: string;
  state: string;
  street: string;
  cep: string;
  number: string;
  district: string;
  companyId: number;
}

interface UpdateLocationProps {
  name: string;
  city: string;
  state: string;
  street: string;
  cep: string;
  number: string;
  district: string;
}

export const getLocations = (companyId: number) =>
  api.get(`/locations/companies/${companyId}`);

export const createLocation = (data: CreateLocationProps) =>
  api.post(`/locations`, { ...data });

export const editLocation = (locationId: number, data: UpdateLocationProps) =>
  api.put(`/locations/${locationId}`, { ...data });

export const deleteLocation = (locationId: number) =>
  api.delete(`/locations/${locationId}`);
