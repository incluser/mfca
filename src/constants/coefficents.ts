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
  premium_economy: 0.21435,
  business: 0.3885,
  first: 0.53587,
};

export const HouseHoldEmissionFactors = {
  electricity: 0.6499459915,
  naturalgas: 0.18256,
  gasoil: 2.72417,
  coal: 2904.95233557047,
  woodchips: 1335.71,
  propane: 1.5414,
  butane: 1.74296,
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
      Average: 0.16815,
    },

    Petrol: {
      Small: 0.14012,
      Medium: 0.17751,
      Large: 0.27156,
      Average: 0.16323,
    },
    Electricity: {
      //Fake coefficents cause there's no data for electric cars
      Small: 0.13763,
      Medium: 0.2,
      Large: 0.4,
      Average: 0.14323,
    },
    Hybrid: {
      Small: 0.10049,
      Medium: 0.10783,
      Large: 0.15101,
      Average: 0.11781,
    },
    CNG: {
      Small: 0.10049, //fake
      Medium: 0.15447,
      Large: 0.23632,
      Average: 0.17291,
    },
    LPG: {
      Small: 0.10049, //fake
      Medium: 0.17565,
      Large: 0.26872,
      Average: 0.19662,
    },
  },
  motorcycle: {
    Small: 0.08094,
    Medium: 0.09826,
    Large: 0.13072,
    Average: 0.11138,
  },
};

export const PublicTransportEmissionCoefficients = {
  Bus: 0.10141,
  Train: 0.0351,
  Taxi: 0.17751,
  Tram: 0.02832,
  Subway: 0.02753,
};
