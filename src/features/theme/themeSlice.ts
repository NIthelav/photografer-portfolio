import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type Theme = "dark" | "blue" | "yellow" | "light";
export interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const getTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
