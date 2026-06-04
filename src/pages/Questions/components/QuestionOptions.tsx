const QuestionOptions = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">
        Type the options below
      </h3>

      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="flex items-center gap-3"
        >
          <input type="radio" />

          <input
            placeholder={`Option ${item}`}
            className="h-12 w-full rounded-lg border border-slate-300 px-4"
          />
        </div>
      ))}
    </div>
  );
};

export default QuestionOptions;