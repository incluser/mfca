import {
  Box,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  VStack,
} from "@chakra-ui/react";
import { FaCaretDown } from "react-icons/fa";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FlightClass } from "../../constants/static";

type CustomMenuProps = {
  options: string[] | number[];
  placeholder: string;
  label: string;
  showDropdownIcon?: boolean;
  onChange: (value: string | number) => void;
};

const CustomMenu: React.FC<CustomMenuProps> = ({
  options,
  placeholder,
  label,
  showDropdownIcon = true,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | string>(placeholder);
  const { t } = useTranslation()
  const handleSelectOption = (option: string | number) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <VStack align="start" spacing={1}>
      <Flex align="center">
        <Box as="span">{t(label)}</Box>
        {showDropdownIcon && <Icon as={FaCaretDown} ml={2} />}
      </Flex>
      <Menu>
        <MenuButton
          as={Button}
          size="lg"
          minW="160px"
          w="150px"
          minH="40px"
          padding="0"
          textAlign="center"
          bg="#f0f0f0"
          boxShadow="1px 1px 1px #d6d6d6 "
        >
          {selectedOption === FlightClass[1] ? (t("premium economy") || placeholder) : t(selectedOption as string) || placeholder}
        </MenuButton>
        <MenuList>
          {options.map((option, index) => (
            <MenuItem key={index} onClick={() => handleSelectOption(option)}>
              {option === "premium_economy" ? t("premium economy") : t(option as string)}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </VStack>
  );
};

export default CustomMenu;
