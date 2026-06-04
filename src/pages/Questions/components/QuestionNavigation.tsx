import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  useAppDispatch,
  useAppSelector,
} from "@/hooks/redux";

import {
  setCurrentQuestionIndex,
} from "@/store/questions/questionsSlice";

const QuestionNavigation = () => {
  const dispatch =
    useAppDispatch();

  const {
    currentQuestionIndex,
    questions,
  } = useAppSelector(
    (state) => state.questions
  );

  const handlePrevious =
    () => {
      if (
        currentQuestionIndex > 0
      ) {
        dispatch(
          setCurrentQuestionIndex(
            currentQuestionIndex - 1
          )
        );
      }
    };

  const handleNext =
    () => {
      if (
        currentQuestionIndex <
        questions.length - 1
      ) {
        dispatch(
          setCurrentQuestionIndex(
            currentQuestionIndex + 1
          )
        );
      }
    };

  return (
    <div className="flex items-center justify-center gap-10">
      <button
        onClick={handlePrevious}
        disabled={
          currentQuestionIndex === 0
        }
        className="text-slate-500 disabled:opacity-40"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={handleNext}
        disabled={
          currentQuestionIndex ===
          questions.length - 1
        }
        className="text-slate-500 disabled:opacity-40"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default QuestionNavigation;