import api from "@/api/axios";

import type {
  LoginPayload,
  LoginResponse,
} from "@/types/auth.types";

const USE_MOCK_API =
  import.meta.env.VITE_USE_MOCK_API ===
  "true";

/**
 * Temporary mock implementation used
 * while staging API is unstable.
 */
export const loginUser = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  if (USE_MOCK_API) {
    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    return {
      status: "success",
      message: "Login successful",
      data: {
        token: "mock-jwt-token",
        user: {
          id: "1",
          userId: payload.userId,
          name: "VEDANT BOSS",
          role: "admin",
        },
      },
    };
  }

  const { data } = await api.post(
    "/auth/login",
    payload
  );

  return data;
};