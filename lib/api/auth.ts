// lib/api/auth.ts
import api from './axios';
import { setToken, removeToken } from '../utils/token';

export async function login(email: string, password: string) {
  const res = await api.post('/auth/login', { email, password });
  const { token } = res.data;
  setToken(token);
  return res.data;
}

export async function register(data: {
  email: string;
  password: string;
  name: string;
}) {
  return await api.post('/auth/register', data);
}

export function logout() {
  removeToken();
}
