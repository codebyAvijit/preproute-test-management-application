import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import {
  updateQuestion,
} from "@/store/questions/questionsSlice";

const QuestionEditor = () => {
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
          question: value,
        },
      })
    );
  };

  return (
    <textarea
      rows={8}
      placeholder="Type here"
      value={
        currentQuestion?.question ||
        ""
      }
      onChange={(e) =>
        handleChange(
          e.target.value
        )
      }
      className="w-full rounded-xl border border-slate-200 p-4 outline-none"
    />
  );
};

export default QuestionEditor;