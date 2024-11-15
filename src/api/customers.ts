import { Customer } from '../types/api';
import { fetchApi } from './client';

export const customersApi = {
  getAll: () => fetchApi<Customer[]>('/api/Customers'),
  
  getById: (id: string) => 
    fetchApi<Customer>(`/api/Customers/${id}`),
  
  create: (customer: Omit<Customer, 'id'>) =>
    fetchApi<Customer>('/api/Customers', {
      method: 'POST',
      body: JSON.stringify(customer),
    }),
  
  update: (id: string, customer: Partial<Customer>) =>
    fetchApi<Customer>(`/api/Customers/${id}`, {
      method: 'PUT',
      body: JSON.stringify(customer),
    }),
  
  delete: (id: string) =>
    fetchApi<void>(`/api/Customers/${id}`, {
      method: 'DELETE',
    }),
};