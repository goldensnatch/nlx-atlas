import { LandscapeProject } from '../types/api';
import { fetchApi } from './client';

export const projectsApi = {
  getAll: () => fetchApi<LandscapeProject[]>('/api/LandscapeProject'),
  
  getById: (id: string) => 
    fetchApi<LandscapeProject>(`/api/LandscapeProject/${id}`),
  
  create: (project: Omit<LandscapeProject, 'id' | 'createdAt' | 'updatedAt'>) =>
    fetchApi<LandscapeProject>('/api/LandscapeProject', {
      method: 'POST',
      body: JSON.stringify(project),
    }),
  
  update: (id: string, project: Partial<LandscapeProject>) =>
    fetchApi<LandscapeProject>(`/api/LandscapeProject/${id}`, {
      method: 'PUT',
      body: JSON.stringify(project),
    }),
  
  delete: (id: string) =>
    fetchApi<void>(`/api/LandscapeProject/${id}`, {
      method: 'DELETE',
    }),
};