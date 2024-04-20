import { Box, CloseButton, Icon } from "@chakra-ui/react";
import React from "react";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  Cities,
  FlightClass,
  FlightTripTypes,
  FlightTripsNumber,
} from "../../constants/static";
import { updateFlight } from "../../store/slices/Airplane.slice";
import "./Airplane.css";
import CustomMenu from "./CustomMenu";

type CartProps = {
  onRemove: () => void;
  index: number;
};

const Cart: React.FC<CartProps> = ({ onRemove, index }) => {
  const dispatch = useDispatch();

  const handleChanges = async (value: string | number, eventtype: string) => {
    switch (eventtype) {
      case "from":
        dispatch(updateFlight({ index, flight: { from: String(value) } }));
        break;
      case "to":
        dispatch(updateFlight({ index, flight: { to: String(value) } }));
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
  return (
    <div className="flightcart">
      <CloseButton onClick={onRemove} />

      <div className="row">
        <Box display="block" p="2">
          <Box as="span" mr="1">
            From
          </Box>
          <Icon as={FaPlaneDeparture} mr="2" />
          <CustomMenu
            options={Cities}
            placeholder="Departure"
            label=""
            showDropdownIcon={false}
            onChange={(value) => handleChanges(value, "from")}
          />
        </Box>
        <Box display="block" p="1">
          <Box as="span" mr="2">
            To
          </Box>
          <Icon as={FaPlaneArrival} mr="2" />{" "}
          <CustomMenu
            options={Cities}
            placeholder="Arrival"
            label=""
            showDropdownIcon={false}
            onChange={(value) => handleChanges(value, "to")}
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
