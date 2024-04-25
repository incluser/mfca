import { createSlice } from "@reduxjs/toolkit";
import { PrivateState } from "../../types/types";

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

const conversionFactors = {
  km: 1,
  mile: 1.60934,
};

const calculateEmissionPrivateHelper = (state: PrivateState) => {
  const emissionFactors = {
    car: {
      Petrol: 2.31,
      Diesel: 2.68,
      Electricity: 0.17,
      Hybrid: 1.73,
    },
    motorcycle: {
      Petrol: 2.31,
      Diesel: 2.68,
      Electricity: 0.17,
    },
  };
  const carEmission =
    ((state.car.distance * conversionFactors[state.car.measure]) / 100) *
    emissionFactors.car[state.car.fuel] *
    (state.car.type === "Small" ? 1 : state.car.type === "Medium" ? 1.2 : 1.4);
  const motorcycleEmission =
    ((state.motorcycle.distance * conversionFactors[state.motorcycle.measure]) /
      100) *
    emissionFactors.motorcycle[state.motorcycle.fuel];
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
