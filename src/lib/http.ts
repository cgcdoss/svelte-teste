import axios from "axios";

const api = axios.create({
  headers: {
    Authorization: 'um token bearer',
  },
});

// TODO: interceptors para exibir e remover loading

export const http = {
  get: <T>(url: string) => {
    return api.get<T>(url);
  },
  post: <T>(
    url: string,
    body: unknown,
  ) => {
    return api.post<T>(url, body);
  },
};
