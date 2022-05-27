import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import sliderReducer from "../features/slider/sliderSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    slider: sliderReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

