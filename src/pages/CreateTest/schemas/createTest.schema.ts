import { z } from "zod";

const numericString = (
  fieldName: string,
  min: number,
  max: number
) =>
  z
    .string()
    .min(1, `${fieldName} is required`)
    .refine(
      (value) => !isNaN(Number(value)),
      `${fieldName} must be a number`
    )
    .refine(
      (value) => Number(value) >= min,
      `${fieldName} must be at least ${min}`
    )
    .refine(
      (value) => Number(value) <= max,
      `${fieldName} cannot exceed ${max}`
    );

export const createTestSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Test name must be at least 3 characters")
    .max(100, "Test name cannot exceed 100 characters")
    .regex(
      /^[a-zA-Z0-9\s_-]+$/,
      "Only letters, numbers, spaces, hyphens and underscores are allowed"
    ),

  subject: z.string().min(1, "Subject is required"),

  topics: z
    .array(z.string())
    .min(1, "At least one topic is required"),

  subTopics: z
    .array(z.string())
    .min(1, "At least one sub-topic is required"),

  difficulty: z.string().min(1, "Difficulty is required"),

  totalTime: numericString(
    "Total Time",
    1,
    300
  ),

  totalMarks: numericString(
    "Total Marks",
    1,
    5000
  ),

  totalQuestions: numericString(
    "Total Questions",
    1,
    500
  ),

  correctMarks: numericString(
    "Correct Marks",
    0,
    100
  ),

  wrongMarks: z
    .string()
    .min(1, "Wrong Marks is required")
    .refine(
      (value) => !isNaN(Number(value)),
      "Wrong Marks must be a number"
    )
    .refine(
      (value) => Number(value) >= -100,
      "Wrong Marks cannot be less than -100"
    )
    .refine(
      (value) => Number(value) <= 0,
      "Wrong Marks must be 0 or negative"
    ),

  unattemptMarks: numericString(
    "Unattempt Marks",
    0,
    100
  ),
});

export type CreateTestFormData =
  z.infer<typeof createTestSchema>;