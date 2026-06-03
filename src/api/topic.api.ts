import api from "@/api/axios";

import type { Topic } from "@/types/topic.types";
import type { SubTopic } from "@/types/topic.types";

export const getTopicsBySubject =
  async (
    subjectId: string
  ): Promise<Topic[]> => {
    const { data } =
      await api.get(
        `/topics/subject/${subjectId}`
      );

    return data.data;
  };

export const getSubTopics =
  async (
    topicIds: string[]
  ): Promise<SubTopic[]> => {
    const { data } =
      await api.post(
        "/sub-topics/multi-topics",
        {
          topicIds,
        }
      );

    return data.data;
  };