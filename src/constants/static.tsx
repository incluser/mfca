import Plane from "../assets/img/airplane-departure-svgrepo-com.svg";
import Car from "../assets/img/car-svgrepo-com.svg";
import House from "../assets/img/house-svgrepo-com.svg";
import Train from "../assets/img/train-svgrepo-com.svg";
import Leaf from "../assets/img/leaf-svgrepo-com.svg"
import { DistanceMeasures, Label, Tabs } from "../types/types";
// import Secondary from "../assets/img/money-bag-svgrepo-com.svg";

import * as Components from "../components/index";

export const TabsData: Tabs = [
  {
    id: 0,
    text: "Carbon Footprint",
    img: Leaf,
    Component: Components.Welcome,
  },
  {
    id: 1,
    text: "House Factors",
    img: House,
    Component: Components.Household,
  },
  {
    id: 2,
    text: "Private Transport",
    img: Car,
    Component: Components.Private,
  },
  {
    id: 3,
    text: "Airplane Flights",
    img: Plane,
    Component: Components.Airplane,
  },
  {
    id: 4,
    text: "Public Transport",
    img: Train,
    Component: Components.Public,
  },
  // {
  //   id: 5,
  //   text: "Secondary",
  //   img: Secondary,
  //   Component: Components.Secondary,
  // },
];

export const Langs: string[] = ["EN", "RU", "KZ"];

export const DistanceMeasure: DistanceMeasures = [
  {
    text: "km",
    value: 1,
  },
  {
    text: "mile",
    value: 0.621371,
  },
];

export const HouseholdMeasures = [
  {
    text: "kWh",
  },
  {
    text: "kg",
  },
  {
    text: "m³",
  },
];

export const Fields: Array<{ text: string; measures: string[] }> = [
  {
    text: "Electricity",
    measures: ["kWh"],
  },
  {
    text: "Natural Gas",
    measures: ["kWh", "kg", "m³"],
  },
  {
    text: "Biomass",
    measures: ["kWh", "kg"],
  },
  {
    text: "Coal",
    measures: ["kWh", "kg"],
  },
  {
    text: "Heating Oil",
    measures: ["kWh", "kg", "litres"],
  },
  {
    text: "LPG",
    measures: ["kWh", "kg", "litres"],
  },
];

export const DistanceFields = { text: "Distance", measures: ["km", "mile"] };

export const CarFuelTypes = {
  text: "Car Fuel Type",
  measures: ["Petrol", "Diesel", "Hybrid", "Electricity", "CNG", "LPG"],
};

export const CarTypes = {
  text: "Car Type",
  vehicle: "car",
  measures: ["Small", "Medium", "Large", "Average"],
};
export const MotorcycleTypes = {
  text: "Motorcycle Type",
  vehicle: "motorcycle",
  measures: ["Small", "Medium", "Large", "Average"],
};



export const FlightTripTypes: string[] = ["one-way", "round-trip"];

export const FlightClass: string[] = ["economy", "premium_economy", "business", "first"];

export const FlightTripsNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const PublicTransport: Array<{ text: string; measures: string[] }> = [
  {
    text: "Bus",
    measures: ["km", "mile"],
  },
  {
    text: "Train",
    measures: ["km", "mile"],
  },
  // {
  //   text: "Taxi",
  //   measures: ["km", "mile"],
  // },
  // {
  //   text: "Tram",
  //   measures: ["km", "mile"],
  // },
  // {
  //   text: "Subway",
  //   measures: ["km", "mile"],
  // },
];

export const SecondaryLabels: Label[] = [
  { text: "Eating Out", value: "eatingout" },
  { text: "Car Maintenance", value: "carmaintaince" },
  { text: "Clothing", value: "clothing" },
  { text: "Furniture", value: "furniture" },
  { text: "Domestic Water", value: "domesticwater" },
  { text: "Telephone & Internet", value: "telephoneinternet" },
  { text: "Computers & Electronics", value: "computerelectronics" },
  { text: "Electrical Appliances", value: "electricalappliainces" },
  { text: "Postage & Couriers", value: "postage" },
  { text: "Magazines & Books", value: "magazine" },
  { text: "Stationery", value: "stationery" },
  { text: "Cleaning Products", value: "cleaning" },
  { text: "Hair & Self-care", value: "hair" },
  { text: "Pet Food", value: "petfood" },
  { text: "Hotel Stays", value: "hotel" },
  { text: "Insurance", value: "insurance" },
  { text: "Other Legal Services", value: "other" },
];

