import QuestionSidebar from "./components/QuestionSidebar";
import QuestionEditor from "./components/QuestionEditor";
import QuestionOptions from "./components/QuestionOptions";
import SolutionEditor from "./components/SolutionEditor";
import QuestionNavigation from "./components/QuestionNavigation";
import QuestionSettings from "./components/QuestionSettings";
import ActionFooter from "./components/ActionFooter";
import TestOverviewCard from "./components/TestOverviewCard";
import QuestionEditorHeader from "./components/QuestionEditorHeader";
import QuestionBuilderHeader from "./components/QuestionBuilderHeader";
import { useEffect } from "react";

import {
  useAppDispatch,
  useAppSelector,
} from "@/hooks/redux";

import {
  addQuestion,
} from "@/store/questions/questionsSlice";
const QuestionsPage = () => {
  const dispatch =
  useAppDispatch();
  
const questions = useAppSelector(
  (state) => state.questions.questions
);

useEffect(() => {
  if (questions.length === 0) {
    dispatch(
      addQuestion({
        id: crypto.randomUUID(),
        question: "",
        options: ["", "", "", ""],
        correctAnswer: null,
        solution: "",
        difficulty: "",
        topic: "",
        subTopic: "",
      })
    );
  }
}, [dispatch, questions.length]);



  return (
    <div className="space-y-6">
      <QuestionBuilderHeader />

      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <QuestionSidebar />

        <div className="space-y-6">
          <TestOverviewCard />

          <QuestionEditorHeader />

          <QuestionEditor />

          <QuestionOptions />

          <SolutionEditor />

          <QuestionNavigation />

          <QuestionSettings />

          <ActionFooter />
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;