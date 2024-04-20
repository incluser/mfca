import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Langs } from "../../constants/static";
import React from "react";

const Lang = () => {
  const [_selecteed, setSelected] = React.useState<number>(0);
  return (
    <Menu closeOnSelect={true}>
      <MenuButton
        as={Button}
        colorScheme="blue"
        padding={10}
        borderRadius={30}
        bg="#c8e9f9"
        color="black"
      >
        {Langs[_selecteed]}
      </MenuButton>
      <MenuList minWidth="240px">
        {Langs.map((lang: string, index: number) => {
          return (
            <MenuItem
              fontSize={20}
              onClick={() => setSelected(index)}
              key={index}
            >
              {lang}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default Lang;
