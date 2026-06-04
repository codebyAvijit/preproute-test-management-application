const QuestionHeader = () => {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Question 1 / 50
        </h2>

        <div className="flex gap-2">
          <button className="rounded-lg border px-4 py-2 text-sm">
            MCQ
          </button>

          <button className="rounded-lg border px-4 py-2 text-sm">
            CSV
          </button>
        </div>
      </div>

      <button className="text-sm text-red-500">
        Delete All Edits
      </button>
    </div>
  );
};

export default QuestionHeader;