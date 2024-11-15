export interface LandscapeProject {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  customerId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}