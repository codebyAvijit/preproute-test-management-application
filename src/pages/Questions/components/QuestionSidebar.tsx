import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import {
  setCurrentQuestionIndex,
} from "@/store/questions/questionsSlice";

const QuestionSidebar = () => {
  const dispatch =
    useAppDispatch();

  const questions =
    useAppSelector(
      (state) =>
        state.questions.questions
    );

  const currentQuestionIndex =
    useAppSelector(
      (state) =>
        state.questions.currentQuestionIndex
    );

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <h3 className="mb-4 font-medium">
        Question Creation
      </h3>

      <p className="mb-4 text-sm text-slate-500">
        Total Questions : {questions.length}
      </p>

      <div className="space-y-2">
        {questions.map(
          (question, index) => (
            <button
              key={question.id}
              onClick={() =>
                dispatch(
                  setCurrentQuestionIndex(
                    index
                  )
                )
              }
              className={`flex w-full items-center justify-between rounded-lg border px-3 py-2 text-sm transition-all ${
                currentQuestionIndex ===
                index
                  ? "border-indigo-500 bg-indigo-50 text-indigo-600"
                  : "hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />

                <span>
                  Question {index + 1}
                </span>
              </div>

              <span>›</span>
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default QuestionSidebar;