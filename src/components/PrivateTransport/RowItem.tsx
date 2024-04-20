import {
  Button,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { PayloadAction } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/slices/Private.slice";
import { RootState } from "../../store/store";
import { PrivatePayloadType, PrivateRowProps } from "../../types/types";
import "../Household/Household.css";
const RowItem = (props: PrivateRowProps) => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [selectedMeasure, setMeasure] = React.useState<number>(0);
  const dispatch = useDispatch();
  const initialState = useSelector((store: RootState) => store.Private);

  const handleInputChanges = (
    e: React.ChangeEvent<HTMLInputElement>,
    measure?: string
  ) => {
    const value = e.target.value;
    setInputValue(value);
    const actionMap: Record<
      string,
      (value: PrivatePayloadType) => PayloadAction<PrivatePayloadType>
    > = {
      Distance:
        props.vehicle === "car" ? Actions.setCar : Actions.setMotorcycle,
      Type: Actions.setCar,
      Fuel: props.vehicle === "car" ? Actions.setCar : Actions.setMotorcycle,
    };
    const stateKeyMap: Record<string, string> = {
      Distance: "distance",
      "Car Fuel Type": "fuel",
      "Car Type": "type",
      "Motorcycle Fuel Type": "fuel",
    };

    const stateKey = stateKeyMap[props.field.text];

    const action = actionMap[props.field.text];

    if (action) {
      dispatch(
        action({
          ...initialState[props.vehicle],
          [stateKey]: value,
          measure: measure || props.field.measures[selectedMeasure],
        })
      );
    }
  };

  return (
    <div className="row">
      <span>{props.field.text}</span>
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChanges(e)
        }
        w={200}
        type="number"
        placeholder="Amount"
      />
      <Menu isLazy>
        <MenuButton as={Button}>
          {props.field.measures[selectedMeasure]}
        </MenuButton>
        <MenuList>
          {props.field.measures.map((obj, index) => {
            return (
              <MenuItem
                key={index}
                onClick={() => {
                  setMeasure(index);
                  handleInputChanges(
                    {
                      target: { value: inputValue },
                    } as React.ChangeEvent<HTMLInputElement>,
                    obj
                  );
                }}
              >
                {obj}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </div>
  );
};

export default RowItem;
