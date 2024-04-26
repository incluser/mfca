import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PrivateConversionFactors } from "../../constants/coefficents";
import { PublicState, PublicTransportPayloadType } from "../../types/types";
import { PublicTransportEmissionCoefficients } from "./../../constants/coefficents";
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

const calculateEmissionPublicHelper = (state: PublicState) => {
  const busEmission =
    state.bus.distance *
    PrivateConversionFactors[state.bus.measure] *
    PublicTransportEmissionCoefficients.Bus;

  const trainEmission =
    state.train.distance *
    PrivateConversionFactors[state.train.measure] *
    PublicTransportEmissionCoefficients.Train;

  const taxiEmission =
    state.taxi.distance *
    PrivateConversionFactors[state.taxi.measure] *
    PublicTransportEmissionCoefficients.Taxi;

  const tramEmission =
    state.tram.distance *
    PrivateConversionFactors[state.tram.measure] *
    PublicTransportEmissionCoefficients.Tram;

  const subwayEmission =
    state.subway.distance *
    PrivateConversionFactors[state.subway.measure] *
    PublicTransportEmissionCoefficients.Subway;

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
