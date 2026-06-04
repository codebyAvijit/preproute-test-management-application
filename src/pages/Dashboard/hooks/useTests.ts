import { useQuery } from "@tanstack/react-query";

import { getTests } from "@/api/test.api";

export const useTests = () => {
  return useQuery({
    queryKey: ["tests"],
    queryFn: getTests,
  });
};