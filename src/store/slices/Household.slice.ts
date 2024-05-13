import { createSlice } from "@reduxjs/toolkit";
import { HouseHoldState } from "../../types/types";
import { HouseHoldEmissionFactors } from "../../constants/coefficents";

const initialState: HouseHoldState = {
  electricity: {
    amount: 0,
    measure: "kWh",
  },
  naturalgas: {
    amount: 0,
    measure: "kWh",
  },
  gasoil: {
    amount: 0,
    measure: "litres",
  },
  coal: {
    amount: 0,
    measure: "tonnes",
  },
  woodchips: {
    amount: 0,
    measure: "tonnes",
  },
  propane: {
    amount: 0,
    measure: "litres",
  },
  butane: {
    amount: 0,
    measure: "litres",
  },
  emissionResult: 0,
};

export const calculateEmission = (state: HouseHoldState) => {
  let totalEmission = 0;
  totalEmission +=
    state.electricity.amount * HouseHoldEmissionFactors.electricity;
  totalEmission +=
    state.naturalgas.amount * HouseHoldEmissionFactors.naturalgas;
  totalEmission += state.gasoil.amount * HouseHoldEmissionFactors.gasoil;
  totalEmission += state.coal.amount * HouseHoldEmissionFactors.coal;
  totalEmission += state.woodchips.amount * HouseHoldEmissionFactors.woodchips;
  totalEmission += state.propane.amount * HouseHoldEmissionFactors.propane;
  totalEmission += state.butane.amount * HouseHoldEmissionFactors.butane;

  return totalEmission;
};

export const HouseHoldSlice = createSlice({
  name: "household",
  initialState,
  reducers: {
    setElectricity: (state, action) => {
      state.electricity = action.payload;
      state.emissionResult = calculateEmission(state);
    },
    setNaturalGas: (state, action) => {
      state.naturalgas = action.payload;
      state.emissionResult = calculateEmission(state);
    },
    setGasoil: (state, action) => {
      state.gasoil = action.payload;
      state.emissionResult = calculateEmission(state);
    },
    setCoal: (state, action) => {
      state.coal = action.payload;
      state.emissionResult = calculateEmission(state);
    },
    setWoodChips: (state, action) => {
      state.woodchips = action.payload;
      state.emissionResult = calculateEmission(state);
    },
    setPropane: (state, action) => {
      state.propane = action.payload;
      state.emissionResult = calculateEmission(state);
    },
    setButane: (state, action) => {
      state.butane = action.payload;
      state.emissionResult = calculateEmission(state);
    },
    calculateEmissionHouseHold: (state) => {
      state.emissionResult = calculateEmission(state);
    },
    resetDataHousehold: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setElectricity,
  setNaturalGas,
  setGasoil,
  setCoal,
  setWoodChips,
  setPropane,
  setButane,
  calculateEmissionHouseHold,
  resetDataHousehold,
} = HouseHoldSlice.actions;

export default HouseHoldSlice.reducer;
