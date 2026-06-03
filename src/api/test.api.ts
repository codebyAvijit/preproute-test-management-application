import api from "@/api/axios";

import type {
  CreateTestPayload,
} from "@/types/test.types";

export const createTest =
  async (
    payload: CreateTestPayload
  ) => {
    const { data } =
      await api.post(
        "/tests",
        payload
      );

    return data;
  };