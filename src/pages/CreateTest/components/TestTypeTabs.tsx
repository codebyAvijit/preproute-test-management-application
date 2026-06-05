const TestTypeTabs = () => {
  return (
    <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1">
      <button
        type="button"
        className="rounded-md bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600"
      >
        Chapter Wise
      </button>

      <button
        type="button"
        className="px-4 py-2 text-sm text-slate-500"
      >
        PYQ
      </button>

      <button
        type="button"
        className="px-4 py-2 text-sm text-slate-500"
      >
        Mock Test
      </button>
    </div>
  );
};

export default TestTypeTabs;