import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import {
  setMode,
} from "@/store/publish/publishSlice";

const PublishModeTabs = () => {
  const dispatch = useAppDispatch();

  const mode = useAppSelector(
    (state) => state.publish.mode
  );

  return (
    <div className="flex w-fit rounded-xl border border-slate-200 bg-white p-1">
      <button
        onClick={() =>
          dispatch(
            setMode("publishNow")
          )
        }
        className={`rounded-lg px-6 py-2 font-medium transition-all ${
          mode === "publishNow"
            ? "bg-indigo-50 text-indigo-600"
            : "text-slate-500"
        }`}
      >
        Publish Now
      </button>

      <button
        onClick={() =>
          dispatch(
            setMode("schedule")
          )
        }
        className={`rounded-lg px-6 py-2 font-medium transition-all ${
          mode === "schedule"
            ? "bg-indigo-50 text-indigo-600"
            : "text-slate-500"
        }`}
      >
        Schedule Publish
      </button>
    </div>
  );
};

export default PublishModeTabs;