import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type PublishMode =
  | "publishNow"
  | "schedule";

export type LiveUntil =
  | "always"
  | "1week"
  | "2weeks"
  | "3weeks"
  | "1month"
  | "custom";

interface PublishState {
  mode: PublishMode;

  liveUntil: LiveUntil;

  startDate: string;

  startTime: string;

  endDate: string;

  endTime: string;
}

const initialState: PublishState = {
  mode: "publishNow",

  liveUntil: "always",

  startDate: "",

  startTime: "",

  endDate: "",

  endTime: "",
};

const publishSlice = createSlice({
  name: "publish",

  initialState,

  reducers: {
    setMode: (
      state,
      action: PayloadAction<PublishMode>
    ) => {
      state.mode = action.payload;
    },

    setLiveUntil: (
      state,
      action: PayloadAction<LiveUntil>
    ) => {
      state.liveUntil = action.payload;
    },

    setStartDate: (
      state,
      action: PayloadAction<string>
    ) => {
      state.startDate = action.payload;
    },

    setStartTime: (
      state,
      action: PayloadAction<string>
    ) => {
      state.startTime = action.payload;
    },

    setEndDate: (
      state,
      action: PayloadAction<string>
    ) => {
      state.endDate = action.payload;
    },

    setEndTime: (
      state,
      action: PayloadAction<string>
    ) => {
      state.endTime = action.payload;
    },
  },
});

export const {
  setMode,
  setLiveUntil,
  setStartDate,
  setStartTime,
  setEndDate,
  setEndTime,
} = publishSlice.actions;

export default publishSlice.reducer;