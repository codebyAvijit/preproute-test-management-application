export interface CreateTestPayload {
  name: string;

  type: string;

  subject: string;

  topics: string[];

  sub_topics: string[];

  correct_marks: number;

  wrong_marks: number;

  unattempt_marks: number;

  difficulty: string;

  total_time: number;

  total_marks: number;

  total_questions: number;
}
