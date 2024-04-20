import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/slices/Airplane.slice";
import "./Airplane.css";
import Cart from "./Cart";
import { RootState } from "../../store/store";
import { Flight } from "../../types/types";
const Airplane = () => {
  const dispatch = useDispatch();
  const flights = useSelector((state: RootState) => state.Airplane.flights);

  const handleAddFlight = () => {
    dispatch(
      Actions.setFlight({
        distance: 0,
        from: "",
        to: "",
        flightClass: "economy",
        tripType: "one-way",
        trips: 1,
        emissionResult: 0,
      })
    );
  };

  const handleRemoveFlight = (index: number) => {
    dispatch(Actions.removeFlight(index));
  };

  return (
    <div className="conteinercontent">
      <div className="conteinercontent airplanecontainer">
        {flights.map((_: Flight, index: number) => {
          return (
            <Cart
              key={index}
              index={index}
              onRemove={() => handleRemoveFlight(index)}
            />
          );
        })}
      </div>
      <div className="airplanebutton">
        <Button onClick={handleAddFlight} colorScheme="messenger">
          Add Flight
        </Button>
      </div>
    </div>
  );
};

export default Airplane;
