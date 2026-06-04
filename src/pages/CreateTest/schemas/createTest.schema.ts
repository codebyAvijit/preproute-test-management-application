import { z } from "zod";

export const createTestSchema = z.object({
  name: z.string().min(1, "Test name is required"),

  subject: z.string().min(1, "Subject is required"),

  topics: z.array(z.string()),

  subTopics: z.array(z.string()),

  difficulty: z.string().min(1, "Difficulty is required"),

  totalTime: z
    .string()
    .min(1, "Total Time is required"),

  totalMarks: z
    .string()
    .min(1, "Total Marks is required"),

  totalQuestions: z
    .string()
    .min(1, "Total Questions is required"),

  correctMarks: z
    .string()
    .min(1, "Correct Marks is required"),

  wrongMarks: z
    .string()
    .min(1, "Wrong Marks is required"),

  unattemptMarks: z
    .string()
    .min(1, "Unattempt Marks is required"),
});

export type CreateTestFormData =
  z.infer<typeof createTestSchema>;