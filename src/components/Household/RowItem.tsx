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
import * as Actions from "../../store/slices/Household.slice";
import { PayloadType, RowProps } from "../../types/types";
import "./Household.css";
import { useTranslation } from "react-i18next";

const RowItem = (props: RowProps) => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [selectedMeasure, setMeasure] = React.useState<number>(0);
  const dispatch = useDispatch();
  const { t } = useTranslation()
  const handleInputChanges = (
    e: React.ChangeEvent<HTMLInputElement>,
    measure?: string
  ) => {
    const value = e.target.value;
    setInputValue(value);
    const actionMap: Record<
      string,
      (value: PayloadType) => PayloadAction<PayloadType>
    > = {
      Electricity: Actions.setElectricity,
      "Natural Gas": Actions.setNaturalGas,
      Biomass: Actions.setBiomass,
      Coal: Actions.setCoal,
      "Heating Oil": Actions.setHeatingOil,
      LPG: Actions.setLPG,
    };

    const action = actionMap[props.field.text];

    if (action) {
      dispatch(
        action({
          amount: Number(value),
          measure: measure || props.field.measures[selectedMeasure],
        } as PayloadType)
      );
    }
  };

  return (
    <div className="row">
      <span>{t(props.field.text)}</span>
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChanges(e)
        }
        w={200}
        type="number"
        placeholder={t("Amount")}
      />
      <Menu isLazy>
        <MenuButton as={Button}>
          {t(props.field.measures[selectedMeasure])}
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
                {t(obj)}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </div>
  );
};

export default RowItem;
