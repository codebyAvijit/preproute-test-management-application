import { useQuery } from "@tanstack/react-query";

import { getTopicsBySubject } from "@/api/topic.api";

export const useTopics = (
  subjectId?: string
) => {
  return useQuery({
    queryKey: [
      "topics",
      subjectId,
    ],

    queryFn: () =>
      getTopicsBySubject(
        subjectId!
      ),

    enabled: !!subjectId,
  });
};