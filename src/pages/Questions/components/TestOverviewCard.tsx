import { Pencil } from "lucide-react";

const TestOverviewCard = () => {
  return (
   <div className="relative rounded-xl border border-slate-200 bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-600">
          Chapter Wise
        </span>

        <button className="absolute right-4 top-4">
          <Pencil size={16} />
        </button>
      </div>

      <div className="mb-4 flex items-center gap-3">
        <h2 className="text-lg font-semibold">Chapter 1</h2>

        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-600">
          Easy
        </span>
      </div>

      <div className="space-y-2 text-sm text-slate-600">
        <p>Subject : Mathematics</p>

        <p>Topic : Algebra, Geometry</p>

        <p>Sub Topic : Linear Equations</p>
      </div>

      <div className="mt-6 flex gap-2">
  <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500">
    60 Min
  </span>

  <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500">
    50 Qs
  </span>

  <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500">
    250 Marks
  </span>
</div>
    </div>
  );
};

export default TestOverviewCard;
