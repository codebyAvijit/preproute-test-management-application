const QuestionSidebar = () => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <h3 className="mb-4 font-medium">
        Question Creation
      </h3>

      <p className="mb-4 text-sm text-slate-500">
        Total Questions : 50
      </p>

      <div className="space-y-2">
        {Array.from({ length: 10 }).map(
          (_, index) => (
            <button
              key={index}
              className="flex w-full items-center justify-between rounded-lg border px-3 py-2 text-sm hover:bg-slate-50"
            >
              <span>
                Question {index + 1}
              </span>

              <span>›</span>
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default QuestionSidebar;