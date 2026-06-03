import api from "@/api/axios";
import type { Subject } from "@/types/subject.types";

export const getSubjects =
  async (): Promise<Subject[]> => {
    const { data } =
      await api.get("/subjects");

    return data.data;
  };