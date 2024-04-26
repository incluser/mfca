import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Langs } from "../../constants/static";
import React from "react";
import { useTranslation } from 'react-i18next';

const Lang = () => {
  const { i18n, t } = useTranslation();
  const [_selected, setSelected] = React.useState<number>(0);

  const changeLanguage = (index: number) => {
    setSelected(index);
    i18n.changeLanguage(Langs[index]);
  }

  return (
    <Menu closeOnSelect={true}>
      <MenuButton
        as={Button}
        colorScheme="blue"
        padding={30}
        borderRadius={10}
        bg="#c8e9f9"
        color="black"
      >
        {t(Langs[_selected])}
      </MenuButton>
      <MenuList minWidth="240px">
        {Langs.map((lang: string, index: number) => {
          return (
            <MenuItem
              fontSize={20}
              onClick={() => changeLanguage(index)}
              key={index}
            >
              {t(lang)}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default Lang;