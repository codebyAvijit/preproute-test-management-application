import { Pencil } from "lucide-react";

import { useAppSelector } from "@/hooks/redux";

import { useNavigate } from "react-router-dom";

const ConfirmationSummaryCard = () => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/create-test");
  };

  const testDetails = useAppSelector((state) => state.testCreation.testDetails);

  if (!testDetails) return null;

  return (
    <div className="relative rounded-xl border border-slate-200 bg-white p-6">
      <button onClick={handleEdit} className="absolute right-6 top-6">
        <Pencil size={18} />
      </button>

      <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs text-indigo-600">
        Chapter Wise
      </span>

      <div className="mt-4 flex items-center gap-3">
        <h2 className="text-2xl font-semibold">{testDetails.name}</h2>

        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-600">
          {testDetails.difficulty}
        </span>
      </div>

      <div className="mt-6 space-y-2 text-sm text-slate-600">
        <p>Subject : {testDetails.subject}</p>

        <p>Topic : {testDetails.topics.join(", ")}</p>

        <p>Sub Topic : {testDetails.subTopics.join(", ")}</p>
      </div>

      <div className="mt-6 flex gap-4">
        <span>{testDetails.totalTime} Min</span>

        <span>{testDetails.totalQuestions} Qs</span>

        <span>{testDetails.totalMarks} Marks</span>
      </div>
    </div>
  );
};

export default ConfirmationSummaryCard;
