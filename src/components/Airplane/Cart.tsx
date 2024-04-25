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

type CartProps = {
  onRemove: () => void;
  index: number;
};

const Cart: React.FC<CartProps> = ({ onRemove, index }) => {
  const dispatch = useDispatch();
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const flights = useSelector((state: RootState) => state.Airplane.flights);
  const flight = flights[index];
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
    const response = await fetch('https://airportgap.com/api/airports/distance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `from=${fromIata}&to=${toIata}`,
    });
    const data = await response.json();
    const fromCity = data.data.attributes.from_airport.city;
    const toCity = data.data.attributes.to_airport.city;
    dispatch(updateFlight({ index, flight: { fromCity, toCity } }));
    return data.data.attributes.kilometers;
  };

  return (
    <div className="flightcart">
      <CloseButton onClick={onRemove} />

      <div className="row">
        <Box display="block" p="2">
          <Box as="span" mr="1">
            From
          </Box>
          <Icon as={FaPlaneDeparture} mr="2" />

          <Box as="span" mr="1" fontSize={17}>
            {from.length === 3 && to.length === 3 && flight.fromCity}
          </Box>
          <Input
            value={from}
            onChange={(e) => handleChanges(e.target.value, 'from')}
            placeholder="Departure IATA code"
          />
        </Box>
        <Box display="block" p="1">
          <Box as="span" mr="2">
            To
          </Box>
          <Icon as={FaPlaneArrival} mr="2" />{" "}
          <Box as="span" mr="1" fontSize={17}>
            {from.length === 3 && to.length === 3 && flight.toCity}
          </Box>
          <Input
            value={to}
            onChange={(e) => handleChanges(e.target.value, 'to')}
            placeholder="Arrival IATA code"
          />

        </Box>
      </div>
      <div className="row" style={{ marginLeft: "10px", gap: "60px" }}>
        <CustomMenu
          options={FlightTripTypes}
          placeholder="Flight"
          label="Flight"
          onChange={(value) => handleChanges(value, "tripType")}
        />
        <CustomMenu
          options={FlightClass}
          placeholder="Class"
          label="Class"
          onChange={(value) => handleChanges(value, "class")}
        />
        <CustomMenu
          options={FlightTripsNumber}
          placeholder="Passengers"
          label="Passengers"
          onChange={(value) => handleChanges(value, "trips")}
        />
      </div>
    </div>
  );
};

export default Cart;
