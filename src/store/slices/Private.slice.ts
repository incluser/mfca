import { createSlice } from "@reduxjs/toolkit";
import { PrivateState } from "../../types/types";
import {
  PrivateCarTypeEmissionCoefficents,
  PrivateConversionFactors,
  PrivateEmissionFactors,
} from "../../constants/coefficents";

const initialState: PrivateState = {
  car: {
    distance: 0,
    measure: "km",
    type: "Small",
    fuel: "Petrol",
  },
  motorcycle: {
    distance: 0,
    measure: "km",
    fuel: "Petrol",
  },
  emissionResult: 0,
};

const calculateEmissionPrivateHelper = (state: PrivateState) => {
  const carEmission =
    ((state.car.distance * PrivateConversionFactors[state.car.measure]) / 100) *
    PrivateEmissionFactors.car[state.car.fuel] *
    (PrivateCarTypeEmissionCoefficents[state.car.type] / 1000);
  const motorcycleEmission =
    ((state.motorcycle.distance *
      PrivateConversionFactors[state.motorcycle.measure]) /
      100) *
    PrivateEmissionFactors.motorcycle[state.motorcycle.fuel];
  return carEmission + motorcycleEmission;
};

export const PrivateSlice = createSlice({
  name: "private",
  initialState,
  reducers: {
    setCar: (state, action) => {
      state.car = { ...state.car, ...action.payload };
      state.emissionResult = calculateEmissionPrivateHelper(state);
    },
    setMotorcycle: (state, action) => {
      state.motorcycle = { ...state.motorcycle, ...action.payload };
      state.emissionResult = calculateEmissionPrivateHelper(state);
    },
    calculateEmissionPrivate: (state) => {
      state.emissionResult = calculateEmissionPrivateHelper(state);
    },
    resetDataPrivate: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setCar,
  setMotorcycle,
  calculateEmissionPrivate,
  resetDataPrivate,
} = PrivateSlice.actions;

export default PrivateSlice.reducer;
