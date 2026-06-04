import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/store/auth/authSlice";
import testCreationReducer from "@/store/testCreation/testCreationSlice";
import questionsReducer from "@/store/questions/questionsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    testCreation: testCreationReducer,
    questions: questionsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;