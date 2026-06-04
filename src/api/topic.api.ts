import api from "@/api/axios";

import type { Topic, SubTopic } from "@/types/topic.types";

const USE_MOCK_API = import.meta.env.VITE_USE_MOCK_API === "true";

/**
 * Uses mock response when staging APIs are unavailable.
 * Switch VITE_USE_MOCK_API=false to use live backend.
 */

export const getTopicsBySubject = async (
  subjectId: string,
): Promise<Topic[]> => {
  if (USE_MOCK_API) {
    await new Promise((resolve) => setTimeout(resolve, 500));

    switch (subjectId) {
      case "1":
        return [
          {
            id: "101",
            name: "Algebra",
            subject_id: "1",
          },
          {
            id: "102",
            name: "Geometry",
            subject_id: "1",
          },
          {
            id: "103",
            name: "Calculus",
            subject_id: "1",
          },
        ];

      case "2":
        return [
          {
            id: "201",
            name: "Mechanics",
            subject_id: "2",
          },
          {
            id: "202",
            name: "Optics",
            subject_id: "2",
          },
          {
            id: "203",
            name: "Thermodynamics",
            subject_id: "2",
          },
        ];

      case "3":
        return [
          {
            id: "301",
            name: "Organic Chemistry",
            subject_id: "3",
          },
          {
            id: "302",
            name: "Inorganic Chemistry",
            subject_id: "3",
          },
          {
            id: "303",
            name: "Physical Chemistry",
            subject_id: "3",
          },
        ];

      default:
        return [];
    }
  }

  const { data } = await api.get(`/topics/subject/${subjectId}`);

  return data.data;
};

export const getSubTopics = async (topicIds: string[]): Promise<SubTopic[]> => {
  if (USE_MOCK_API) {
    await new Promise((resolve) => setTimeout(resolve, 500));

    switch (topicIds[0]) {
      case "101":
        return [
          {
            id: "1001",
            name: "Linear Equations",
            topic_id: "101",
          },
          {
            id: "1002",
            name: "Quadratic Equations",
            topic_id: "101",
          },
        ];

      case "102":
        return [
          {
            id: "1101",
            name: "Triangles",
            topic_id: "102",
          },
          {
            id: "1102",
            name: "Circles",
            topic_id: "102",
          },
        ];

      case "103":
        return [
          {
            id: "1201",
            name: "Limits",
            topic_id: "103",
          },
          {
            id: "1202",
            name: "Derivatives",
            topic_id: "103",
          },
        ];

      case "201":
        return [
          {
            id: "2001",
            name: "Newton's Laws",
            topic_id: "201",
          },
          {
            id: "2002",
            name: "Work & Energy",
            topic_id: "201",
          },
        ];

      case "202":
        return [
          {
            id: "2101",
            name: "Reflection",
            topic_id: "202",
          },
          {
            id: "2102",
            name: "Refraction",
            topic_id: "202",
          },
        ];

      case "203":
        return [
          {
            id: "2201",
            name: "Heat Transfer",
            topic_id: "203",
          },
          {
            id: "2202",
            name: "Entropy",
            topic_id: "203",
          },
        ];

      case "301":
        return [
          {
            id: "3001",
            name: "Hydrocarbons",
            topic_id: "301",
          },
          {
            id: "3002",
            name: "Alcohols",
            topic_id: "301",
          },
        ];
      case "302":
        return [
          {
            id: "3101",
            name: "Periodic Table",
            topic_id: "302",
          },
          {
            id: "3102",
            name: "Chemical Bonding",
            topic_id: "302",
          },
        ];

      case "303":
        return [
          {
            id: "3201",
            name: "Solutions",
            topic_id: "303",
          },
          {
            id: "3202",
            name: "Electrochemistry",
            topic_id: "303",
          },
        ];

      default:
        return [];
    }
  }

  const { data } = await api.post("/sub-topics/multi-topics", {
    topicIds,
  });

  return data.data;
};
