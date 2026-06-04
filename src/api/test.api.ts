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

  export const getTests =
  async () => {
    if (USE_MOCK_API) {
      return [
        {
          id: "1",
          name: "Math Mock Test",
          subject: "Mathematics",
          status: "Draft",
          total_questions: 50,
        },

        {
          id: "2",
          name: "Physics Test",
          subject: "Physics",
          status: "Published",
          total_questions: 40,
        },
      ];
    }

    const { data } =
      await api.get("/tests");

    return data.data;
  };