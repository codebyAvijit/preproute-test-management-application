import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/store/auth/authSlice";
import testCreationReducer from "@/store/testCreation/testCreationSlice";
import questionsReducer from "@/store/questions/questionsSlice";
import publishReducer from "@/store/publish/publishSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    testCreation: testCreationReducer,
    questions: questionsReducer,
    publish: publishReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;