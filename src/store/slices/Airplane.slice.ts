import { createSlice } from "@reduxjs/toolkit";
import { AirplaneState, Flight } from "../../types/types";
import { FlightEmissionFactors } from "../../constants/coefficents";

const initialState: AirplaneState = {
  flights: [
    {
      distance: 0,
      from: "",
      to: "",
      fromCity: "",
      toCity: "",
      flightClass: "economy",
      tripType: "one-way",
      trips: 1,
      emissionResult: 0,
    },
  ],
  allEmission: 0,
};

const calculateEmission = (flight: Flight) => {
  const emission =
    (flight.distance * FlightEmissionFactors[flight.flightClass]) / 1000;
  return flight.tripType === "round-trip"
    ? emission * flight.trips * 2
    : emission * flight.trips;
};

const calculateTotalEmission = (state: {
  allEmission: number;
  flights: Array<Flight>;
}) => {
  state.allEmission = state.flights.reduce((acc, flight) => {
    return acc + calculateEmission(flight);
  }, 0);
};

export const AirplaneSlice = createSlice({
  name: "airplane",
  initialState,
  reducers: {
    setFlight: (state, action) => {
      const flight = action.payload;
      flight.emissionResult = calculateEmission(flight);
      state.flights = [...state.flights, flight];
      calculateTotalEmission(state);
    },
    removeFlight: (state, action) => {
      if (action.payload !== 0) {
        state.flights = state.flights.filter(
          (_, index) => index !== action.payload
        );
      }
      calculateTotalEmission(state);
    },
    updateFlight: (state, action) => {
      state.flights[action.payload.index] = {
        ...state.flights[action.payload.index],
        ...action.payload.flight,
      };
      const flight = state.flights[action.payload.index];
      flight.emissionResult = calculateEmission(flight);
      calculateTotalEmission(state);
    },
    calculateEmissionAirplane: (state) => {
      state.allEmission = state.flights.reduce((acc, flight) => {
        return acc + calculateEmission(flight);
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
  resetDataAirplane,
} = AirplaneSlice.actions;

export default AirplaneSlice.reducer;
