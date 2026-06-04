const QuestionEditor = () => {
  return (
    <textarea
      rows={8}
      placeholder="Type here"
      className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-indigo-500"
    />
  );
};

export default QuestionEditor;