import CreateTestWizard from "./components/CreateTestWizard";

const CreateTestPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <div className="text-sm text-slate-500">
          Test Creation / Create Test / Chapter Wise
        </div>
      </div>
     <CreateTestWizard />
    </div>
  );
};

export default CreateTestPage;
