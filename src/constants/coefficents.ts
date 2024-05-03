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
  economy: 0.13397,
  business: 0.3885,
  first: 0.53587,
};

export const HouseHoldEmissionFactors = {
  electricity: 0.6499459915,
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
    Diesel: {
      Small: 0.13763,
      Medium: 0.16548,
      Large: 0.20691,
    },

    Petrol: {
      Small: 0.14012,
      Medium: 0.17751,
      Large: 0.27156,
    },
    Electricity: {
      //Fake coefficents cause there's no data for electric cars
      Small: 0.13763,
      Medium: 0.2,
      Large: 0.4,
    },
    Hybrid: {
      Small: 0.10049,
      Medium: 0.10783,
      Large: 0.15101,
    },
  },
  motorcycle: {
    Small: 0.08094,
    Medium: 0.09826,
    Large: 0.13072,
  },
};

export const PublicTransportEmissionCoefficients = {
  Bus: 0.10141,
  Train: 0.0351,
  Taxi: 0.17751,
  Tram: 0.02832,
  Subway: 0.02753,
};
