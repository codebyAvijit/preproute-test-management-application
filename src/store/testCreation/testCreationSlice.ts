import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

import type { CreateTestFormData } from "@/pages/CreateTest/schemas/createTest.schema";

interface TestCreationState {
  testDetails: CreateTestFormData | null;

  testId: string | null;
}

const initialState: TestCreationState = {
  testDetails: null,

  testId: null,
};

const testCreationSlice = createSlice({
  name: "testCreation",

  initialState,

  reducers: {
    saveTestDetails: (state, action: PayloadAction<CreateTestFormData>) => {
      state.testDetails = action.payload;
    },

    setTestId: (state, action: PayloadAction<string>) => {
      state.testId = action.payload;
    },
    clearTestDetails: (state) => {
      state.testDetails = null;

      state.testId = null;
    },
  },
});

export const { saveTestDetails,  clearTestDetails, setTestId } =
  testCreationSlice.actions;

export default testCreationSlice.reducer;
