import { useMutation } from "@tanstack/react-query";

import { createTest } from "@/api/test.api";

export const useCreateTest = () => {
  return useMutation({
    mutationFn: createTest,
  });
};