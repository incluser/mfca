import { CarFuelTypes } from "./../constants/static";
export type Tabs = Array<{
  id: number;
  text: string;
  img: string;
  Component: React.FC;
}>;

export type DistanceMeasures = Array<{
  text: string;
  value: number;
}>;

export type RowProps = {
  field: { text: string; measures: string[] };
};

export interface HouseHoldState {
  electricity: {
    amount: number;
    measure: "kWh";
  };
  naturalgas: {
    amount: number;
    measure: "kWh";
  };
  gasoil: {
    amount: number;
    measure: "litres";
  };
  coal: {
    amount: number;
    measure: "tonnes";
  };
  woodchips: {
    amount: number;
    measure: "tonnes";
  };
  propane: {
    amount: number;
    measure: "litres";
  };
  butane: {
    amount: number;
    measure: "litres";
  };
  emissionResult: number;
}

export interface PrivateState {
  car: {
    distance: number;
    measure: "km" | "mile";
    fuel: CarFuelTypes;
    type: VehicleTypes;
  };
  motorcycle: {
    distance: number;
    measure: "km" | "mile";
    type: VehicleTypes;
  };
  emissionResult: number;
}

export type PayloadType = {
  amount: number;
  measure: string;
};

export type PublicTransportPayloadType = {
  distance: number;
  measure: "km" | "mile";
};

export type TypeProps = {
  text: string;
  measures: string[];
  vehicle: "car" | "motorcycle";
};

export type PrivatePayloadType = {
  distance?: number;
  measure?: string;
  fuel?: string;
  type?: string;
};

export type PrivateRowProps = {
  field: { text: string; measures: string[] };
  vehicle: "car" | "motorcycle";
};

export type AirplaneState = {
  flights: Array<{
    distance: number;
    from: string;
    to: string;
    fromCity: string;
    toCity: string;
    flightClass: FlightClass;
    tripType: "one-way" | "round-trip";
    trips: number;
    emissionResult: number;
  }>;
  allEmission: number;
};

export type Flight = {
  distance: number;
  from: string;
  to: string;
  flightClass: FlightClass;
  tripType: "one-way" | "round-trip";
  trips: number;
  emissionResult: number;
};

export type FlightTripType = "one-way" | "round-trip";

export type FlightClass = "economy" | "business" | "first" | "premium_economy";

export type CustomMenuProps = {
  options: string[] | number[];
  placeholder: string;
};

export type PublicState = {
  bus: {
    distance: number;
    measure: "km" | "mile";
  };
  train: {
    distance: number;
    measure: "km" | "mile";
  };
  taxi: {
    distance: number;
    measure: "km" | "mile";
  };
  tram: {
    distance: number;
    measure: "km" | "mile";
  };
  subway: {
    distance: number;
    measure: "km" | "mile";
  };
  emissionResult: number;
};

export type SecondaryState = {
  eatingout: number;
  carmaintaince: number;
  clothing: number;
  furniture: number;
  domesticwater: number;
  telephoneinternet: number;
  computerelectronics: number;
  electricalappliainces: number;
  postage: number;
  magazine: number;
  stationery: number;
  cleaning: number;
  hair: number;
  petfood: number;
  hotel: number;
  insurance: number;
  other: number;
  emissionResult: number;
};

export type Label = {
  text: string;
  value: keyof SecondaryState;
};

export type DistanceType = Array<{
  from: string;
  to: string;
  distance: number;
}>;
export type ResultItemProps = {
  text: string;
  value: number;
};

export type VehicleTypes = "Small" | "Medium" | "Large" | "Average";
export type CarFuelTypes =
  | "Petrol"
  | "Diesel"
  | "Electricity"
  | "Hybrid"
  | "LPG"
  | "CNG";
