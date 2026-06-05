export interface Test {
  id: string;
  name: string;
  subject: string;
  status?: string;
  total_questions: number;
}

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


export interface BulkQuestionPayload {
  type: string;

  subject: string;

  question: string;

  option1: string;

  option2: string;

  option3: string;

  option4: string;

  correct_option: string;

  explanation: string;

  difficulty: string;

  test_id: string;
}