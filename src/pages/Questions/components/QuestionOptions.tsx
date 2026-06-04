import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import {
  updateQuestion,
} from "@/store/questions/questionsSlice";

const QuestionOptions = () => {
  const dispatch =
    useAppDispatch();

  const {
    questions,
    currentQuestionIndex,
  } = useAppSelector(
    (state) => state.questions
  );

  const currentQuestion =
    questions[
      currentQuestionIndex
    ];

  const handleOptionChange = (
    optionIndex: number,
    value: string
  ) => {
    const updatedOptions = [
      ...(currentQuestion?.options ||
        ["", "", "", ""]),
    ];

    updatedOptions[
      optionIndex
    ] = value;

    dispatch(
      updateQuestion({
        index:
          currentQuestionIndex,

        data: {
          options:
            updatedOptions,
        },
      })
    );
  };

  const handleCorrectAnswer = (
    optionIndex: number
  ) => {
    dispatch(
      updateQuestion({
        index:
          currentQuestionIndex,

        data: {
          correctAnswer:
            optionIndex,
        },
      })
    );
  };

  return (
    <div className="space-y-4">
      <h3 className="font-medium">
        Type the options below
      </h3>

      {[0, 1, 2, 3].map(
        (optionIndex) => (
          <div
            key={optionIndex}
            className="flex items-center gap-3"
          >
            <input
              type="radio"
              checked={
                currentQuestion?.correctAnswer ===
                optionIndex
              }
              onChange={() =>
                handleCorrectAnswer(
                  optionIndex
                )
              }
            />

            <input
              placeholder={`Option ${
                optionIndex + 1
              }`}
              value={
                currentQuestion
                  ?.options?.[
                  optionIndex
                ] || ""
              }
              onChange={(e) =>
                handleOptionChange(
                  optionIndex,
                  e.target.value
                )
              }
              className="h-12 w-full rounded-lg border border-slate-300 px-4"
            />
          </div>
        )
      )}
    </div>
  );
};

export default QuestionOptions;