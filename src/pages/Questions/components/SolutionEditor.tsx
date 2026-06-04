const SolutionEditor = () => {
  return (
    <div>
      <h3 className="mb-3 font-medium">
        Add Solution
      </h3>

      <textarea
        rows={6}
        placeholder="Type here"
        className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-indigo-500"
      />
    </div>
  );
};

export default SolutionEditor;