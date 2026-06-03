import CreateTestForm from "./CreateTestForm";

const CreateTestPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">
          Create Test
        </h1>

        <p className="text-sm text-slate-500">
          Configure and create a new
          test.
        </p>
      </div>

      <CreateTestForm />
    </div>
  );
};

export default CreateTestPage;