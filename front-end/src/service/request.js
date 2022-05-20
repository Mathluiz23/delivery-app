import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export function setToken(token) {
  api.defaults.headers.common.Authorization = token;
}

export async function createUser(endpoint, body) {
  try {
    await api.post(endpoint, body);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
