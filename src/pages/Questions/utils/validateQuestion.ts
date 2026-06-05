import type { Question } from "@/store/questions/questionsSlice";

export const validateQuestion = (
  question: Question
) => {
  if (
    !question.question.trim()
  ) {
    return "Question is required";
  }

  const emptyOption =
    question.options.some(
      (option) =>
        !option.trim()
    );

  if (emptyOption) {
    return "All options are required";
  }

  if (
    question.correctAnswer ===
    null
  ) {
    return "Select a correct answer";
  }

  if (
    !question.solution.trim()
  ) {
    return "Solution is required";
  }

  if (
    !question.difficulty
  ) {
    return "Difficulty is required";
  }

  if (!question.topic) {
    return "Topic is required";
  }

  if (!question.subTopic) {
    return "Sub Topic is required";
  }

  return null;
};