import { createSlice } from "@reduxjs/toolkit";
import { HouseHoldState } from "../../types/types";

const initialState: HouseHoldState = {
  electricity: {
    amount: 0,
    measure: "kWh",
  },
  naturalgas: {
    amount: 0,
    measure: "kWh",
  },
  biomass: {
    amount: 0,
    measure: "kWh",
  },
  coal: {
    amount: 0,
    measure: "kWh",
  },
  heatingoil: {
    amount: 0,
    measure: "kWh",
  },
  lpg: {
    amount: 0,
    measure: "kWh",
  },
  emissionResult: 0,
};

const emissionFactors = {
  electricity: 0.25,
  naturalgas: 0.0184,
  biomass: 0.0025,
  coal: 0.094,
  heatingoil: 0.025,
  lpg: 0.0214,
};

const conversionFactors = {
  kWh: 3,
  kg: 36,
  "m³": 28,
  litres: 28,
};

export const calculateEmission = (state: HouseHoldState) => {
  let totalEmission = 0;
  totalEmission += state.electricity.amount * emissionFactors.electricity;
  totalEmission +=
    state.naturalgas.amount *
    emissionFactors.naturalgas *
    conversionFactors[state.naturalgas.measure];
  totalEmission +=
    state.biomass.amount *
    emissionFactors.biomass *
    conversionFactors[state.biomass.measure];
  totalEmission +=
    state.coal.amount *
    emissionFactors.coal *
    conversionFactors[state.coal.measure];
  totalEmission +=
    state.heatingoil.amount *
    emissionFactors.heatingoil *
    conversionFactors[state.heatingoil.measure];
  totalEmission +=
    state.lpg.amount *
    emissionFactors.lpg *
    conversionFactors[state.lpg.measure];

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
    setBiomass: (state, action) => {
      state.biomass = action.payload;
      state.emissionResult = calculateEmission(state);
    },
    setCoal: (state, action) => {
      state.coal = action.payload;
      state.emissionResult = calculateEmission(state);
    },
    setHeatingOil: (state, action) => {
      state.heatingoil = action.payload;
      state.emissionResult = calculateEmission(state);
    },
    setLPG: (state, action) => {
      state.lpg = action.payload;
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
  setBiomass,
  setCoal,
  setHeatingOil,
  setLPG,
  calculateEmissionHouseHold,
  resetDataHousehold,
} = HouseHoldSlice.actions;

export default HouseHoldSlice.reducer;
