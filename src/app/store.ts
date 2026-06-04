import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/store/auth/authSlice";
import testCreationReducer from "@/store/testCreation/testCreationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    testCreation: testCreationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;