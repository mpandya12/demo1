// tourSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const tourSlice = createSlice({
  name: "tour",
  initialState: {
    currentStep:3 ,
  },
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
  },
});

export const { setCurrentStep } = tourSlice.actions;

export const selectCurrentStep = (state) => state.tour.currentStep;

export default tourSlice.reducer;
