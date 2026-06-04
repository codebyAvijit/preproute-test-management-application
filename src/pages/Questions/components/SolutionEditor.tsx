import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import {
  updateQuestion,
} from "@/store/questions/questionsSlice";

const SolutionEditor = () => {
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

  const handleChange = (
    value: string
  ) => {
    dispatch(
      updateQuestion({
        index:
          currentQuestionIndex,

        data: {
          solution: value,
        },
      })
    );
  };

  return (
    <div className="space-y-4">
      <h3 className="font-medium">
        Add Solution
      </h3>

      <textarea
        rows={6}
        placeholder="Type here"
        value={
          currentQuestion?.solution ||
          ""
        }
        onChange={(e) =>
          handleChange(
            e.target.value
          )
        }
        className="w-full rounded-xl border border-slate-200 p-4 outline-none"
      />
    </div>
  );
};

export default SolutionEditor;