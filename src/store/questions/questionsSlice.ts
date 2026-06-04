import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number | null;
  solution: string;
  difficulty: string;
  topic: string;
  subTopic: string;
}

interface QuestionsState {
  questions: Question[];
  currentQuestionIndex: number;
}

const initialState: QuestionsState = {
  questions: [],
  currentQuestionIndex: 0,
};

const questionsSlice = createSlice({
  name: "questions",

  initialState,

  reducers: {
    addQuestion: (state, action: PayloadAction<Question>) => {
      state.questions.push(action.payload);
    },

    setCurrentQuestionIndex: (state, action: PayloadAction<number>) => {
      state.currentQuestionIndex = action.payload;
    },

    createNewQuestion: (state) => {
      state.questions.push({
        id: crypto.randomUUID(),

        question: "",

        options: ["", "", "", ""],

        correctAnswer: null,

        solution: "",

        difficulty: "",

        topic: "",

        subTopic: "",
      });

      state.currentQuestionIndex = state.questions.length - 1;
    },
    updateQuestion: (
      state,
      action: PayloadAction<{
        index: number;
        data: Partial<Question>;
      }>,
    ) => {
      state.questions[action.payload.index] = {
        ...state.questions[action.payload.index],
        ...action.payload.data,
      };
    },
    clearCurrentQuestion: (
  state
) => {
  const currentQuestion =
    state.currentQuestionIndex;

  state.questions[
    currentQuestion
  ] = {
    ...state.questions[
      currentQuestion
    ],

    question: "",

    options: [
      "",
      "",
      "",
      "",
    ],

    correctAnswer: null,

    solution: "",

    difficulty: "",

    topic: "",

    subTopic: "",
  };
},
  },
});

export const {
  addQuestion,
  setCurrentQuestionIndex,
  createNewQuestion,
  updateQuestion,
  clearCurrentQuestion,
} = questionsSlice.actions;

export default questionsSlice.reducer;
