import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

import type { CreateTestFormData } from "@/pages/CreateTest/schemas/createTest.schema";

interface TestCreationState {
  testDetails: CreateTestFormData | null;
}

const initialState: TestCreationState = {
  testDetails: null,
};

const testCreationSlice = createSlice({
  name: "testCreation",

  initialState,

  reducers: {
    saveTestDetails: (
      state,
      action: PayloadAction<CreateTestFormData>
    ) => {
      state.testDetails =
        action.payload;
    },

    clearTestDetails: (
      state
    ) => {
      state.testDetails = null;
    },
  },
});

export const {
  saveTestDetails,
  clearTestDetails,
} = testCreationSlice.actions;

export default testCreationSlice.reducer;