import TestBasicInfo from "./components/TestBasicInfo";
import SubjectTopicSection from "./components/SubjectTopicSection";
import MarkingSchemeSection from "./components/MarkingSchemeSection";
import TestStatsSection from "./components/TestStatsSection";

const CreateTestForm = () => {
  return (
    <div className="space-y-6">
      <TestBasicInfo />

      <SubjectTopicSection />

      <MarkingSchemeSection />

      <TestStatsSection />
    </div>
  );
};

export default CreateTestForm;