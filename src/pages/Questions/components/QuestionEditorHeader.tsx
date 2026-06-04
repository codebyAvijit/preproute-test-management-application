import { useAppSelector } from "@/hooks/redux";

const QuestionEditorHeader = () => {
  const currentQuestionIndex =
    useAppSelector(
      (state) =>
        state.questions
          .currentQuestionIndex
    );

  const totalQuestions =
    useAppSelector(
      (state) =>
        state.questions.questions
          .length
    );

//     console.log(
//   "Current Question Index:",
//   currentQuestionIndex
// );

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Question{" "}
          {currentQuestionIndex + 1}
          {" / "}
          {totalQuestions}
        </h2>

        <div className="flex gap-2">
          <button className="rounded-lg border px-4 py-2 text-sm">
            MCQ
          </button>

          <button className="rounded-lg border px-4 py-2 text-sm">
            CSV
          </button>
        </div>
      </div>

      <button className="text-sm text-red-500">
        Delete All Edits
      </button>
    </div>
  );
};

export default QuestionEditorHeader;