import {
  useAppDispatch,
  useAppSelector,
} from "@/hooks/redux";

import {
  setStartDate,
  setStartTime,
  setEndDate,
  setEndTime,
} from "@/store/publish/publishSlice";

const PublishScheduleFields = () => {
  const dispatch =
    useAppDispatch();

  const {
    mode,
    liveUntil,
    startDate,
    startTime,
    endDate,
    endTime,
  } = useAppSelector(
    (state) =>
      state.publish
  );

  return (
    <div className="space-y-6">
      {mode ===
        "schedule" && (
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h3 className="mb-4 text-lg font-semibold">
            Publish Schedule
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Start Date
              </label>

              <input
                type="date"
                value={
                  startDate
                }
                onChange={(
                  e
                ) =>
                  dispatch(
                    setStartDate(
                      e.target
                        .value
                    )
                  )
                }
                className="h-12 w-full rounded-lg border border-slate-300 px-4"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Start Time
              </label>

              <input
                type="time"
                value={
                  startTime
                }
                onChange={(
                  e
                ) =>
                  dispatch(
                    setStartTime(
                      e.target
                        .value
                    )
                  )
                }
                className="h-12 w-full rounded-lg border border-slate-300 px-4"
              />
            </div>
          </div>
        </div>
      )}

      {liveUntil ===
        "custom" && (
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h3 className="mb-4 text-lg font-semibold">
            Custom Duration
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                End Date
              </label>

              <input
                type="date"
                value={
                  endDate
                }
                onChange={(
                  e
                ) =>
                  dispatch(
                    setEndDate(
                      e.target
                        .value
                    )
                  )
                }
                className="h-12 w-full rounded-lg border border-slate-300 px-4"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                End Time
              </label>

              <input
                type="time"
                value={
                  endTime
                }
                onChange={(
                  e
                ) =>
                  dispatch(
                    setEndTime(
                      e.target
                        .value
                    )
                  )
                }
                className="h-12 w-full rounded-lg border border-slate-300 px-4"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublishScheduleFields;