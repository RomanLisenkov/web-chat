import axios, { AxiosResponse } from "axios";

type ResponseRegistration = {
  accessToken: string;
  refreshToken: string;
  user: {
    login: string;
    id: number;
  };
};

type MessageFromDbType = {
  message: string;
  userId: number;
  login: string;
};

type ResponseMessages = MessageFromDbType[];

const API_URL = "http://localhost:3000/api";

const instanceAxios = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

instanceAxios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

instanceAxios.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originRequest = error.config;
    if (error.response.status === 401) {
      try {
        const response = await axios.get<ResponseRegistration>(
          `${API_URL}/refresh`,
          { withCredentials: true },
        );
        localStorage.setItem("token", response.data.accessToken);
        return instanceAxios.request(originRequest);
      } catch (e) {
        console.log({ ERROR_REFRESH: e });
      }
    } else if (error) {
      throw error;
    }
  },
);

export async function registration({
  login,
  password,
}: {
  login: string;
  password: string;
}) {
  const response = await instanceAxios.post<ResponseRegistration>(
    "/registration",
    {
      login,
      password,
    },
  );
  return response.data;
}

export async function login({
  login,
  password,
}: {
  login: string;
  password: string;
}) {
  const response = await instanceAxios.post<ResponseRegistration>("/login", {
    login,
    password,
  });

  return response.data;
}

export async function logout() {
  const response: AxiosResponse<unknown> = await instanceAxios.post(
    "/logout",
    {},
  );
  return response.data;
}

export async function checkAuth() {
  const response = await axios.get<ResponseRegistration>(`${API_URL}/refresh`, {
    withCredentials: true,
  });
  return response.data;
}

export async function getMessages() {
  const response = await instanceAxios.get<ResponseMessages>("/messages");

  return response.data;
}
