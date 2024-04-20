import { createSlice } from "@reduxjs/toolkit";
import { AirplaneState } from "../../types/types";
import { distances } from "../../constants/static";

const initialState: AirplaneState = {
  flights: [
    {
      distance: 0,
      from: "Astana",
      to: "Astana",
      flightClass: "economy",
      tripType: "one-way",
      trips: 1,
      emissionResult: 0,
    },
  ],
  allEmission: 0,
};

const emissionFactors: Record<string, number> = {
  economy: 0.123,
  business: 0.123 * 2.5,
  first: 0.123 * 4,
};

export const AirplaneSlice = createSlice({
  name: "airplane",
  initialState,
  reducers: {
    setFlight: (state, action) => {
      const flight = action.payload;
      const distanceObj = distances.find(
        (d) => d.from === flight.from && d.to === flight.to
      );
      if (distanceObj) {
        flight.distance = distanceObj.distance;
      }
      const emission =
        (flight.distance * emissionFactors[flight.flightClass]) / 1000;
      flight.emissionResult =
        flight.tripType === "round-trip"
          ? emission * flight.trips * 2
          : emission * flight.trips;
      state.flights = [...state.flights, flight];
    },
    removeFlight: (state, action) => {
      if (action.payload !== 0) {
        state.flights = state.flights.filter(
          (_, index) => index !== action.payload
        );
      }
    },
    updateFlight: (state, action) => {
      state.flights[action.payload.index] = {
        ...state.flights[action.payload.index],
        ...action.payload.flight,
      };
      const flight = state.flights[action.payload.index];
      if (flight.from && flight.to) {
        const distanceObj = distances.find(
          (d) => d.from === flight.from && d.to === flight.to
        );
        if (distanceObj) {
          flight.distance = distanceObj.distance;
        }
      }
      const emission =
        (flight.distance * emissionFactors[flight.flightClass]) / 1000;
      flight.emissionResult =
        flight.tripType === "round-trip"
          ? emission * flight.trips * 2
          : emission * flight.trips;

      state.allEmission = state.flights.reduce((acc, flight) => {
        return acc + flight.emissionResult;
      }, 0);
    },
    calculateDistance: (state, action) => {
      const flight = state.flights[action.payload.index];
      const distanceObj = distances.find(
        (d) => d.from === flight.from && d.to === flight.to
      );
      if (distanceObj) {
        flight.distance = distanceObj.distance;
      }
    },
    calculateEmissionAirplane: (state) => {
      const emissionFactors = {
        economy: 0.123,
        business: 0.123 * 2.5,
        first: 0.123 * 4,
      };
      state.allEmission = state.flights.reduce((acc, flight) => {
        const emission =
          (flight.distance * emissionFactors[flight.flightClass]) / 1000;
        return flight.tripType === "round-trip"
          ? parseFloat((acc + emission * flight.trips * 2).toFixed(1))
          : parseFloat((acc + emission * flight.trips).toFixed(1));
      }, 0);
    },
    resetDataAirplane: (state) => {
      Object.assign(state, initialState);
    },
  },
});
export const {
  setFlight,
  removeFlight,
  calculateEmissionAirplane,
  updateFlight,
  calculateDistance,
  resetDataAirplane,
} = AirplaneSlice.actions;

export default AirplaneSlice.reducer;
