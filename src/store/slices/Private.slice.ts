import { createSlice } from "@reduxjs/toolkit";
import {
  PrivateConversionFactors,
  PrivateEmissionFactors,
} from "../../constants/coefficents";
import { VehicleTypes, PrivateState } from "../../types/types";

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
    type: "Small",
  },
  emissionResult: 0,
};

const calculateEmissionPrivateHelper = (state: PrivateState) => {
  const carEmission =
    state.car.distance *
    PrivateConversionFactors[state.car.measure] *
    PrivateEmissionFactors.car[state.car.fuel][state.car.type];

  const motorcycleEmission =
    state.motorcycle.distance *
    PrivateConversionFactors[state.motorcycle.measure] *
    PrivateEmissionFactors.motorcycle[state.motorcycle.type as VehicleTypes];

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
