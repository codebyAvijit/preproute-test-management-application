import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import { setLiveUntil } from "@/store/publish/publishSlice";

import type { LiveUntil } from "@/store/publish/publishSlice";

const options: {
  label: string;
  value: LiveUntil;
}[] = [
  {
    label: "Always Available",
    value: "always",
  },
  {
    label: "1 Week",
    value: "1week",
  },
  {
    label: "2 Weeks",
    value: "2weeks",
  },
  {
    label: "3 Weeks",
    value: "3weeks",
  },
  {
    label: "1 Month",
    value: "1month",
  },
  {
    label: "Custom Duration",
    value: "custom",
  },
];

const LiveUntilSection = () => {
  const dispatch = useAppDispatch();

  const liveUntil = useAppSelector((state) => state.publish.liveUntil);
  return (
    <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-6">
      <h3 className="text-lg font-semibold">Live Until</h3>

      <p className="text-slate-500">
        Choose how long this test should remain available on the platform.
      </p>

      <div className="grid grid-cols-2 gap-6">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="radio"
              checked={liveUntil === option.value}
              onChange={() => dispatch(setLiveUntil(option.value))}
            />

            <span>{option.label}</span>
          </label>
        ))}
      </div>
      
    </div>
  );
};

export default LiveUntilSection;
