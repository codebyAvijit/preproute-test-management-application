import api from "./axios";

export interface LoginPayload {
  userId: string;
  password: string;
}

export const loginUser = async (
  payload: LoginPayload
) => {
  const response = await api.post(
    "/auth/login",
    payload
  );

  return response.data;
};