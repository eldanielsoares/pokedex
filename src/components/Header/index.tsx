import { Flex, Text } from "@chakra-ui/react";
import React from "react";

type HeaderProps = {
  title?: string;
};

export const Header: React.FC<HeaderProps> = ({ title = "Pokedéx" }) => {
  return (
    <Flex maxW={"1366px"} py={4} align="center" as="header">
      <Text fontWeight={"bold"} fontSize={"x-large"}>
        {title}
      </Text>
    </Flex>
  );
};
