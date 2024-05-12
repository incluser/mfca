import { AbsoluteCenter, Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Tooltip } from 'react-tooltip';
import Bike from "../../assets/img/bike.png";
import Car from "../../assets/img/car.png";
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
      <div style={{ display: "flex", gap: "20px" }}>
        <img style={{ cursor: "pointer" }} width={25} data-tooltip-id="my-tooltip-car" src={Car} alt="" />
        <img style={{ cursor: "pointer" }} width={25} data-tooltip-id="my-tooltip-bike" src={Bike} alt="" />
      </div>
      <Tooltip id="my-tooltip-car">
        <table style={{ border: '1px solid #777777', borderCollapse: 'collapse', zIndex: 999 }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #777777', padding: '10px' }}>{t("Car Type")}</th>
              <th style={{ border: '1px solid #777777', padding: '10px' }}>{t("Engine Capacity")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #777777', padding: '10px' }}>{t("Small")}</td>
              <td style={{ border: '1px solid #777777', padding: '10px' }}>&lt; 1.4 {t("litres")}</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #777777', padding: '10px' }}>{t("Medium")}</td>
              <td style={{ border: '1px solid #777777', padding: '10px' }}>1.4 - 2.0 {t("litres")}</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #777777', padding: '10px' }}>{t("Large")}</td>
              <td style={{ border: '1px solid #777777', padding: '10px' }}>&gt; 2. {t("litres")}</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #777777', padding: '10px' }}>{t("Average")}</td>
              <td style={{ border: '1px solid #777777', padding: '10px' }}>1.8 - 2.5 {t("litres")}</td>
            </tr>
          </tbody>
        </table>
      </Tooltip>
      <Tooltip id="my-tooltip-bike">
        <table style={{ border: '1px solid #777777', borderCollapse: 'collapse', zIndex: 999 }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #777777', padding: '10px' }}>{t("Motorcycle Type")}</th>
              <th style={{ border: '1px solid #777777', padding: '10px' }}>{t("Engine Capacity")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #777777', padding: '10px' }}>{t("Small")}</td>
              <td style={{ border: '1px solid #777777', padding: '10px' }}>&lt; 125 {t("cc")}</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #777777', padding: '10px' }}>{t("Medium")}</td>
              <td style={{ border: '1px solid #777777', padding: '10px' }}>125-500 {t("cc")}</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #777777', padding: '10px' }}>{t("Large")}</td>
              <td style={{ border: '1px solid #777777', padding: '10px' }}>&gt; 500 {t("cc")}</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #777777', padding: '10px' }}>{t("Average")}</td>
              <td style={{ border: '1px solid #777777', padding: '10px' }}>300-600 {t("cc")}</td>
            </tr>
          </tbody>
        </table>
      </Tooltip>
      <div className="car">
        <Box position="relative" padding="10">
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
