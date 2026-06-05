import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import Button from "@/components/common/Button/Button";

import {
  useAppDispatch,
  useAppSelector,
} from "@/hooks/redux";

import { createTest } from "@/api/test.api";

import {
  setTestId,
} from "@/store/testCreation/testCreationSlice";

import type {
  CreateTestPayload,
} from "@/types/test.types";

const PublishActions = () => {
  const navigate =
    useNavigate();

  const dispatch =
    useAppDispatch();

  const testDetails =
    useAppSelector(
      (state) =>
        state.testCreation
          .testDetails
    );

  const handleCancel = () => {
    navigate("/questions");
  };

  const handleConfirm =
    async () => {
      if (!testDetails) {
        toast.error(
          "Test details not found"
        );

        return;
      }

      try {
        const payload: CreateTestPayload =
          {
            name:
              testDetails.name,

            type: "chapterwise",

            subject:
              testDetails.subject,

            topics:
              testDetails.topics,

            sub_topics:
              testDetails.subTopics,

            correct_marks:
              Number(
                testDetails.correctMarks
              ),

            wrong_marks:
              Number(
                testDetails.wrongMarks
              ),

            unattempt_marks:
              Number(
                testDetails.unattemptMarks
              ),

            difficulty:
              testDetails.difficulty,

            total_time:
              Number(
                testDetails.totalTime
              ),

            total_marks:
              Number(
                testDetails.totalMarks
              ),

            total_questions:
              Number(
                testDetails.totalQuestions
              ),
          };

        console.log(
          "CREATE TEST PAYLOAD",
          payload
        );

        const response =
          await createTest(
            payload
          );

        console.log(
          "CREATE TEST RESPONSE",
          response
        );

        dispatch(
          setTestId(
            response.data.id
          )
        );

        toast.success(
          "Test created successfully"
        );

        navigate("/success");
      } catch (error) {
        console.error(
          "CREATE TEST ERROR",
          error
        );

        toast.error(
          "Failed to create test"
        );
      }
    };

  return (
    <div className="flex justify-end gap-4">
      <Button
        variant="secondary"
        onClick={handleCancel}
      >
        Cancel
      </Button>

      <Button
        onClick={handleConfirm}
      >
        Confirm
      </Button>
    </div>
  );
};

export default PublishActions;