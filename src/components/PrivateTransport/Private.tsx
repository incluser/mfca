import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {
  CarFuelTypes,
  CarTypes,
  DistanceFields,
  MotorcycleTypes
} from "../../constants/static";
import "./Private.css";
import RowItem from "./RowItem";
import Type from "./Type";
const Private = () => {
  const { t } = useTranslation()
  return (
    <div className="privatecontainer">
      <div className="car">
        <Box position="relative" padding="10">
          <Divider borderColor="#c9c9c9" />
          <AbsoluteCenter bg="white" px="4">
            {t('Car')}
          </AbsoluteCenter>
        </Box>
        <div className="privaterow ">
          <RowItem field={DistanceFields} vehicle="car" />
          <Type {...CarTypes} vehicle="car" />
          <Type {...CarFuelTypes} vehicle="car" />
        </div>
      </div>
      <div className="bike">
        <Box position="relative" padding="10">
          <Divider borderColor="#c9c9c9" />
          <AbsoluteCenter bg="white" px="4">
            {t('Motorcycle')}
          </AbsoluteCenter>
        </Box>
        <div className="privaterow ">
          <RowItem field={DistanceFields} vehicle="motorcycle" />
          <Type {...MotorcycleTypes} vehicle="motorcycle" />
        </div>
      </div>
    </div>
  );
};

export default Private;
