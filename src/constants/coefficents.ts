export const CarbonCoefficients: Record<string, number> = {
  eatingout: 0.1,
  carmaintaince: 0.2,
  clothing: 0.3,
  furniture: 0.4,
  domesticwater: 0.5,
  telephoneinternet: 0.6,
  computerelectronics: 0.3,
  electricalappliainces: 0.2,
  postage: 0.4,
  magazine: 0.1,
  stationery: 0.1,
  cleaning: 0.2,
  hair: 0.3,
  petfood: 0.4,
  hotel: 0.5,
  insurance: 0.4,
  other: 0.2,
};

export const FlightEmissionFactors: Record<string, number> = {
  economy: 0.123,
  business: 0.123 * 2.5,
  first: 0.123 * 4,
};

export const HouseHoldEmissionFactors = {
  electricity: 0.25,
  naturalgas: 0.0184,
  biomass: 0.0025,
  coal: 0.094,
  heatingoil: 0.025,
  lpg: 0.0214,
};

export const HouseHoldConversionFactors = {
  kWh: 3,
  kg: 36,
  "m³": 28,
  litres: 28,
};

export const PrivateConversionFactors = {
  km: 1,
  mile: 1.60934,
};

export const PrivateEmissionFactors = {
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

export const PublicTransportEmissionCoefficients = {
  Bus: 0.089,
  Train: 0.041,
  Taxi: 0.183,
  Tram: 0.038,
  Subway: 0.5,
};

export const PrivateCarTypeEmissionCoefficents = {
  Small: 1,
  Medium: 1.2,
  Large: 1.4,
};
