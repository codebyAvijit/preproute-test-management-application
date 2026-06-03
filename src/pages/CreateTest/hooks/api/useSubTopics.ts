import { useQuery } from "@tanstack/react-query";

import { getSubTopics } from "@/api/topic.api";

export const useSubTopics = (
  topicIds: string[]
) => {
  return useQuery({
    queryKey: [
      "sub-topics",
      topicIds,
    ],

    queryFn: () =>
      getSubTopics(topicIds),

    enabled:
      topicIds.length > 0,
  });
};