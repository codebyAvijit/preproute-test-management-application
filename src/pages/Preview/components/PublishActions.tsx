import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

import Button from "@/components/common/Button/Button";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import { createTest } from "@/api/test.api";

import { setTestId } from "@/store/testCreation/testCreationSlice";

import type { CreateTestPayload } from "@/types/test.types";

import { createQuestionsBulk } from "@/api/test.api";

import type { BulkQuestionPayload } from "@/types/test.types";

import {
  publishTest,
} from "@/api/test.api";

const PublishActions = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const testDetails = useAppSelector((state) => state.testCreation.testDetails);

  const questions = useAppSelector((state) => state.questions.questions);

  const handleCancel = () => {
    navigate("/questions");
  };

  const handleConfirm = async () => {
    if (!testDetails) {
      toast.error("Test details not found");

      return;
    }

    try {
      const payload: CreateTestPayload = {
        name: testDetails.name,

        type: "chapterwise",

        subject: testDetails.subject,

        topics: testDetails.topics,

        sub_topics: testDetails.subTopics,

        correct_marks: Number(testDetails.correctMarks),

        wrong_marks: Number(testDetails.wrongMarks),

        unattempt_marks: Number(testDetails.unattemptMarks),

        difficulty: testDetails.difficulty,

        total_time: Number(testDetails.totalTime),

        total_marks: Number(testDetails.totalMarks),

        total_questions: Number(testDetails.totalQuestions),
      };


      const response = await createTest(payload);


      const testId =
  response.data.id;

dispatch(
  setTestId(testId)
);

if (questions.length === 0) {
  toast.error(
    "No questions found"
  );

  return;
}

const questionsPayload: BulkQuestionPayload[] =
  questions.map(
    (question) => ({
      type: "mcq",

      subject: testDetails.subject,

      question:
        question.question,

      option1:
        question.options[0],

      option2:
        question.options[1],

      option3:
        question.options[2],

      option4:
        question.options[3],

      correct_option:
        `option${
          (question.correctAnswer ?? 0) +
          1
        }`,

      explanation:
        question.solution,

      difficulty:
        question.difficulty,

      test_id:
        testId,
    })
  );



await createQuestionsBulk(
  questionsPayload
);

await publishTest(
  testId
);



toast.success(
  "Test published successfully"
);

navigate("/success");

      
    } catch (error: unknown) {
  if (
    axios.isAxiosError(error)
  ) {
    console.error(
      "API RESPONSE",
      error.response?.data
    );

    toast.error(
      error.response?.data
        ?.message ??
        "Failed to publish test"
    );

    return;
  }

  toast.error(
    "Failed to publish test"
  );
}
  };

  return (
   <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
      <Button variant="secondary" onClick={handleCancel}>
        Cancel
      </Button>

      <Button onClick={handleConfirm}>Confirm</Button>
    </div>
  );
};

export default PublishActions;
