import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SecondaryState } from "../../types/types";
import { CarbonCoefficients } from "../../constants/coefficents";
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
            CarbonCoefficients[field as keyof SecondaryState] || 0),
        0
      );
    },
    calculateEmissionSecondary: (state) => {
      state.emissionResult = Object.keys(state).reduce(
        (acc, field) =>
          acc +
          (state[field as keyof SecondaryState] *
            CarbonCoefficients[field as keyof SecondaryState] || 0),
        0
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
