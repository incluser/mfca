import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PublicState } from "../../types/types";
import { PublicTransportPayloadType } from "../../types/types";
const initialState: PublicState = {
  bus: {
    distance: 0,
    measure: "km",
  },
  train: {
    distance: 0,
    measure: "km",
  },
  taxi: {
    distance: 0,
    measure: "km",
  },
  tram: {
    distance: 0,
    measure: "km",
  },
  subway: {
    distance: 0,
    measure: "km",
  },
  emissionResult: 0,
};

const conversionFactors = {
  km: 1,
  mile: 1.60934,
};

const calculateEmissionPublicHelper = (state: PublicState) => {
  const busEmission =
    state.bus.distance * conversionFactors[state.bus.measure] * 0.089;
  const trainEmission =
    state.train.distance * conversionFactors[state.train.measure] * 0.041;
  const taxiEmission =
    state.taxi.distance * conversionFactors[state.taxi.measure] * 0.183;
  const tramEmission =
    state.tram.distance * conversionFactors[state.tram.measure] * 0.033;
  const subwayEmission =
    state.subway.distance * conversionFactors[state.subway.measure] * 0.038;

  return (
    busEmission + trainEmission + taxiEmission + tramEmission + subwayEmission
  );
};
export const PublicSlice = createSlice({
  name: "public",
  initialState,
  reducers: {
    setBus: (state, action: PayloadAction<PublicTransportPayloadType>) => {
      state.bus = action.payload;
      state.emissionResult = calculateEmissionPublicHelper(state);
    },
    setTrain: (state, action: PayloadAction<PublicTransportPayloadType>) => {
      state.train = action.payload;
      state.emissionResult = calculateEmissionPublicHelper(state);
    },
    setTaxi: (state, action: PayloadAction<PublicTransportPayloadType>) => {
      state.taxi = action.payload;
      state.emissionResult = calculateEmissionPublicHelper(state);
    },
    setTram: (state, action: PayloadAction<PublicTransportPayloadType>) => {
      state.tram = action.payload;
      state.emissionResult = calculateEmissionPublicHelper(state);
    },
    setSubway: (state, action: PayloadAction<PublicTransportPayloadType>) => {
      state.subway = action.payload;
      state.emissionResult = calculateEmissionPublicHelper(state);
    },
    calculateEmissionPublic: (state) => {
      state.emissionResult = calculateEmissionPublicHelper(state);
    },
    resetDataPublic: (state) => {
      Object.assign(state, initialState);
    },
  },
});
export const {
  setBus,
  setTaxi,
  setSubway,
  setTrain,
  setTram,
  calculateEmissionPublic,
  resetDataPublic,
} = PublicSlice.actions;

export default PublicSlice.reducer;
