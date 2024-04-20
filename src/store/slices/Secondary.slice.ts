import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SecondaryState } from "../../types/types";
const initialState: SecondaryState = {
  eatingout: 0,
  carmaintaince: 0,
  clothing: 0,
  furniture: 0,
  domesticwater: 0,
  telephoneinternet: 0,
  computerelectronics: 0,
  electricalappliainces: 0,
  postage: 0,
  magazine: 0,
  stationery: 0,
  cleaning: 0,
  hair: 0,
  petfood: 0,
  hotel: 0,
  insurance: 0,
  other: 0,
  emissionResult: 0,
};
const carbonCoefficients: Record<string, number> = {
  eatingout: 0.1,
  carmaintaince: 0.2,
  clothing: 0.3,
  furniture: 0.4,
  domesticwater: 0.5,
  telephoneinternet: 0.6,
  computerelectronics: 0.3,
  electricalappliainces: 0.2,
  postage: 0.4,
  magazine: 0.1,
  stationery: 0.1,
  cleaning: 0.2,
  hair: 0.3,
  petfood: 0.4,
  hotel: 0.5,
  insurance: 0.4,
  other: 0.2,
};

export const SecondarySlice = createSlice({
  name: "secondary",
  initialState,
  reducers: {
    setField: (
      state,
      action: PayloadAction<{ field: keyof SecondaryState; value: number }>
    ) => {
      state[action.payload.field] = action.payload.value;
      state.emissionResult = Object.keys(state).reduce(
        (acc, field) =>
          acc +
          (state[field as keyof SecondaryState] *
            carbonCoefficients[field as keyof SecondaryState] || 0),
        0
      );
    },
    calculateEmissionSecondary: (state) => {
      state.emissionResult = parseFloat(
        Object.keys(state)
          .reduce(
            (acc, field) =>
              acc +
              (state[field as keyof SecondaryState] *
                carbonCoefficients[field as keyof SecondaryState] || 0),
            0
          )
          .toFixed(1)
      );
    },
    resetDataSecondary: (state) => {
      Object.assign(state, initialState);
    },
  },
});
export const { setField, calculateEmissionSecondary, resetDataSecondary } =
  SecondarySlice.actions;

export default SecondarySlice.reducer;
