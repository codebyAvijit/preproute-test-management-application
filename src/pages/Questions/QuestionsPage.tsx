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

const QuestionsPage = () => {
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