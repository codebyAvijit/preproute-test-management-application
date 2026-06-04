import api from "@/api/axios";
import type { Subject } from "@/types/subject.types";

const USE_MOCK_API = import.meta.env.VITE_USE_MOCK_API === "true";

/**
 * Uses mock data when staging APIs are unavailable.
 * Switch VITE_USE_MOCK_API=false to use live backend.
 */

export const getSubjects = async (): Promise<Subject[]> => {
  if (USE_MOCK_API) {
    return [
      {
        id: "1",
        name: "Mathematics",
      },
      {
        id: "2",
        name: "Physics",
      },
      {
        id: "3",
        name: "Chemistry",
      },
    ];
  }

  const { data } = await api.get("/subjects");

  return data.data;
};
