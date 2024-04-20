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
import { useDispatch } from "react-redux";
import * as Actions from "../../store/slices/Public.slice";
import {
  PayloadType,
  PublicTransportPayloadType,
  RowProps,
} from "../../types/types";
import "../Household/Household.css";

const RowItem = (props: RowProps) => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [selectedMeasure, setMeasure] = React.useState<number>(0);
  const dispatch = useDispatch();

  const handleInputChanges = (
    e: React.ChangeEvent<HTMLInputElement>,
    measure?: string
  ) => {
    const value = e.target.value;
    setInputValue(value);
    const actionMap: Record<
      string,
      (
        value: PublicTransportPayloadType
      ) => PayloadAction<PublicTransportPayloadType>
    > = {
      Bus: Actions.setBus,
      Train: Actions.setTrain,
      Taxi: Actions.setTaxi,
      Tram: Actions.setTram,
      Subway: Actions.setSubway,
    };
    const action = actionMap[props.field.text];

    if (action) {
      dispatch(
        action({
          distance: Number(value),
          measure: measure || props.field.measures[selectedMeasure],
        } as PublicTransportPayloadType)
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
