import { Box, CloseButton, Icon, Input } from "@chakra-ui/react";
import React from "react";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  FlightClass,
  FlightTripTypes,
  FlightTripsNumber
} from "../../constants/static";
import { updateFlight } from "../../store/slices/Airplane.slice";
import "./Airplane.css";
import CustomMenu from "./CustomMenu";
import { RootState } from "../../store/store";
import { useTranslation } from "react-i18next";

type CartProps = {
  onRemove: () => void;
  index: number;
};

const Cart: React.FC<CartProps> = ({ onRemove, index }) => {
  const dispatch = useDispatch();
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const [error, setError] = React.useState<string | null>(null)
  const flights = useSelector((state: RootState) => state.Airplane.flights);
  const flight = flights[index];
  const { t } = useTranslation()
  const handleChanges = async (value: string | number, eventtype: string) => {
    switch (eventtype) {
      case "from":
        setFrom(String(value));
        dispatch(updateFlight({ index, flight: { from: String(value) } }));
        if (to && String(value).length === 3) {
          const distance = await fetchDistance(String(value), to);
          dispatch(updateFlight({ index, flight: { distance } }));
        } else {
          dispatch(updateFlight({ index, flight: { distance: 0 } }));
        }
        break;
      case "to":
        setTo(String(value));
        dispatch(updateFlight({ index, flight: { to: String(value) } }));
        if (from && String(value).length === 3) {
          const distance = await fetchDistance(from, String(value));
          dispatch(updateFlight({ index, flight: { distance } }));
        } else {
          dispatch(updateFlight({ index, flight: { distance: 0 } }));
        }
        break;

      case "tripType":
        dispatch(updateFlight({ index, flight: { tripType: String(value) } }));
        break;
      case "class":
        dispatch(
          updateFlight({ index, flight: { flightClass: String(value) } })
        );
        break;
      case "trips":
        dispatch(updateFlight({ index, flight: { trips: Number(value) } }));
        break;
    }
  };

  const fetchDistance = async (fromIata: string, toIata: string) => {
    try {
      const response = await fetch('https://airportgap.com/api/airports/distance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          "Authorization": "Bearer ShV6fdBqNK3sx9gDtaSCN8j9"
        },
        body: `from=${fromIata}&to=${toIata}`,
      });
      if (!response.ok) {
        throw new Error('Failed to fetch distance');
      }
      const data = await response.json();
      const fromCity = data.data.attributes.from_airport.city;
      const toCity = data.data.attributes.to_airport.city;
      dispatch(updateFlight({ index, flight: { fromCity, toCity } }));
      setError(null);
      return data.data.attributes.kilometers;
    } catch (error) {
      setError("Invalid IATA code ")
      return
    }
  };

  return (
    <div className="flightcart">
      <CloseButton onClick={onRemove} />

      <div className="row">
        <Box display="block" p="2">
          <Box as="span" mr="1">
            {t("From")}
          </Box>
          <Icon as={FaPlaneDeparture} mr="2" />

          <Box as="span" mr="1" fontSize={17}>
            {error ? t("Invalid IATA code") : from.length === 3 && flight.fromCity}
          </Box>
          <Input
            value={from}
            onChange={(e) => handleChanges(e.target.value, 'from')}
            placeholder={t("Departure IATA code")}
          />
        </Box>
        <Box display="block" p="1">
          <Box as="span" mr="2">
            {t("To")}
          </Box>
          <Icon as={FaPlaneArrival} mr="2" />{" "}
          <Box as="span" mr="1" fontSize={17}>
            {error ? t("Invalid IATA code") : from.length === 3 && to.length === 3 && flight.toCity}
          </Box>
          <Input
            value={to}
            onChange={(e) => handleChanges(e.target.value, 'to')}
            placeholder={t("Arrival IATA code")}
          />

        </Box>
      </div>
      <div className="row" style={{ marginLeft: "10px", gap: "60px" }}>

        <CustomMenu
          options={FlightTripTypes}
          placeholder={t("Flight")}
          label="Flight"
          onChange={(value) => handleChanges(value, "tripType")}
        />
        <CustomMenu
          options={FlightClass}
          placeholder={t("Class")}
          label="Class"
          onChange={(value) => handleChanges(value, "class")}
        />
        <CustomMenu
          options={FlightTripsNumber}
          placeholder={t("Passengers")}
          label="Passengers"
          onChange={(value) => handleChanges(value, "trips")}
        />
      </div>
    </div>
  );
};

export default Cart;


