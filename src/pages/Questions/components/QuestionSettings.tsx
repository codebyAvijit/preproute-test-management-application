import { FormField, Select } from "@/components/common";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import {
  updateQuestion,
} from "@/store/questions/questionsSlice";

const difficultyOptions = [
  {
    label: "Easy",
    value: "easy",
  },
  {
    label: "Medium",
    value: "medium",
  },
  {
    label: "Hard",
    value: "hard",
  },
];

const topicOptions = [
  {
    label: "Algebra",
    value: "algebra",
  },
  {
    label: "Geometry",
    value: "geometry",
  },
  {
    label: "Calculus",
    value: "calculus",
  },
];

const subTopicOptions = [
  {
    label: "Linear Equations",
    value: "linear-equations",
  },
  {
    label: "Quadratic Equations",
    value: "quadratic-equations",
  },
  {
    label: "Polynomials",
    value: "polynomials",
  },
];

const QuestionSettings = () => {
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

  return (
    <div className="space-y-6">
      <h3 className="font-medium">
        Question Settings
      </h3>

      <FormField label="Level of Difficulty">
        <Select
          value={
            currentQuestion?.difficulty ||
            ""
          }
          options={
            difficultyOptions
          }
          placeholder="Select Difficulty"
          onChange={(e) =>
            dispatch(
              updateQuestion({
                index:
                  currentQuestionIndex,

                data: {
                  difficulty:
                    e.target.value,
                },
              })
            )
          }
        />
      </FormField>

      <FormField label="Topic">
        <Select
          value={
            currentQuestion?.topic ||
            ""
          }
          options={topicOptions}
          placeholder="Select Topic"
          onChange={(e) =>
            dispatch(
              updateQuestion({
                index:
                  currentQuestionIndex,

                data: {
                  topic:
                    e.target.value,
                },
              })
            )
          }
        />
      </FormField>

      <FormField label="Sub-topic">
        <Select
          value={
            currentQuestion?.subTopic ||
            ""
          }
          options={
            subTopicOptions
          }
          placeholder="Select Sub Topic"
          onChange={(e) =>
            dispatch(
              updateQuestion({
                index:
                  currentQuestionIndex,

                data: {
                  subTopic:
                    e.target.value,
                },
              })
            )
          }
        />
      </FormField>
    </div>
  );
};

export default QuestionSettings;