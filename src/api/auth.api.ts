import api from "@/api/axios";

import type {
  LoginPayload,
  LoginResponse,
} from "@/types/auth.types";

export const loginUser = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  const { data } = await api.post(
    "/auth/login",
    payload
  );

  return data;
};