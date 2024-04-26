import { createSlice } from "@reduxjs/toolkit";
import { HouseHoldState } from "../../types/types";
import {
  HouseHoldConversionFactors,
  HouseHoldEmissionFactors,
} from "../../constants/coefficents";

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

export const calculateEmission = (state: HouseHoldState) => {
  let totalEmission = 0;
  totalEmission +=
    state.electricity.amount * HouseHoldEmissionFactors.electricity;
  totalEmission +=
    state.naturalgas.amount *
    HouseHoldEmissionFactors.naturalgas *
    HouseHoldConversionFactors[state.naturalgas.measure];
  totalEmission +=
    state.biomass.amount *
    HouseHoldEmissionFactors.biomass *
    HouseHoldConversionFactors[state.biomass.measure];
  totalEmission +=
    state.coal.amount *
    HouseHoldEmissionFactors.coal *
    HouseHoldConversionFactors[state.coal.measure];
  totalEmission +=
    state.heatingoil.amount *
    HouseHoldEmissionFactors.heatingoil *
    HouseHoldConversionFactors[state.heatingoil.measure];
  totalEmission +=
    state.lpg.amount *
    HouseHoldEmissionFactors.lpg *
    HouseHoldConversionFactors[state.lpg.measure];

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
