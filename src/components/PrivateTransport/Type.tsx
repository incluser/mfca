import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import "./Private.css";
import { TypeProps } from "../../types/types";
import React from "react";
import { useDispatch } from "react-redux";
import * as Actions from "../../store/slices/Private.slice";
import { useTranslation } from "react-i18next";
const Type = (props: TypeProps) => {
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = React.useState<number>(0);
  const { t } = useTranslation();
  const handleTypeChange = (index: number) => {
    setSelectedType(index);
    if (props.vehicle === "car" && props.text === "Car Type") {
      dispatch(Actions.setCar({ type: props.measures[index] }));
    }
    if (props.vehicle === "car" && props.text === "Car Fuel Type") {
      dispatch(Actions.setCar({ fuel: props.measures[index] }));
    }
    if (props.vehicle === "motorcycle") {
      dispatch(Actions.setMotorcycle({ type: props.measures[index] }));
    }
  };
  return (
    <div className="row private">
      <span>{t(props.text)}</span>
      <Menu isLazy>
        <MenuButton as={Button}>{t(props.measures[selectedType])}</MenuButton>
        <MenuList>
          {props.measures.map((measure, index) => {
            return (
              <MenuItem key={index} onClick={() => handleTypeChange(index)}>
                {t(measure)}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </div>
  );
};

export default Type;
