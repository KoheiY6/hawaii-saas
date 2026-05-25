import axios, { AxiosInstance } from 'axios';

let apiClient: AxiosInstance | null = null;

export function getApiClient(): AxiosInstance {
  if (!apiClient) {
    const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
    apiClient = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  return apiClient;
}

export async function get(url: string) {
  return getApiClient().get(url);
}

export async function post(url: string, data?: any) {
  return getApiClient().post(url, data);
}

export async function put(url: string, data?: any) {
  return getApiClient().put(url, data);
}

export async function del(url: string) {
  return getApiClient().delete(url);
}
