import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type SliderCurr = {
  name: string;
  idx: number;
};
export interface ThemeState {
  curr: SliderCurr;
}

const initialState: ThemeState = {
  curr: {
    name: "photo",
    idx: 0,
  },
};

export const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    setCurr: (state, action: PayloadAction<SliderCurr>) => {
      state.curr = action.payload;
    },
  },
});

export const { setCurr } = sliderSlice.actions;

export const getCurr = (state: RootState) => state.slider.curr;

export default sliderSlice.reducer;
