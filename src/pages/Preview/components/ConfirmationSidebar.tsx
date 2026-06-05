import { useAppSelector } from "@/hooks/redux";

const ConfirmationSidebar = () => {
  const questions =
    useAppSelector(
      (state) =>
        state.questions.questions
    );

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <h3 className="mb-4 font-medium">
        Question Creation
      </h3>

      <p className="mb-4 text-sm text-slate-500">
        Total Questions : {questions.length}
      </p>

      <div className="space-y-2">
        {questions.map(
          (_, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg border border-emerald-300 px-3 py-2 text-sm text-emerald-600"
            >
              <span>
                ✓ Question {index + 1}
              </span>

              <span>›</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ConfirmationSidebar;