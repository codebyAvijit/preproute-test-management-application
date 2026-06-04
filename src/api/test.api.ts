import api from "@/api/axios";

import type {
  CreateTestPayload,
} from "@/types/test.types";

const USE_MOCK_API =
  import.meta.env.VITE_USE_MOCK_API ===
  "true";

/**
 * Uses mock response when staging APIs are unavailable.
 * Switch VITE_USE_MOCK_API=false to use live backend.
 */

export const createTest =
  async (
    payload: CreateTestPayload
  ) => {
    if (USE_MOCK_API) {
      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      return {
        success: true,
        message:
          "Test created successfully",
        data: {
          id: crypto.randomUUID(),
          ...payload,
        },
      };
    }

    const { data } =
      await api.post(
        "/tests",
        payload
      );

    return data;
  };