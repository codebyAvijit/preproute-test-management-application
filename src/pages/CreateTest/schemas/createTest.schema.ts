import { z } from "zod";

export const createTestSchema =
  z.object({
    name: z
      .string()
      .min(1, "Test name is required"),

    subject: z
      .string()
      .min(1, "Subject is required"),

    topics: z.array(z.string()),

    subTopics: z.array(z.string()),

    difficulty: z
      .string()
      .min(
        1,
        "Difficulty is required"
      ),

    totalTime: z.coerce.number(),

    totalMarks: z.coerce.number(),

    totalQuestions:
      z.coerce.number(),

    correctMarks:
      z.coerce.number(),

    wrongMarks:
      z.coerce.number(),

    unattemptMarks:
      z.coerce.number(),
  });

export type CreateTestFormData =
  z.infer<
    typeof createTestSchema
  >;