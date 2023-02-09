import { Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const EmptyList: React.FC = () => {
  return (
    <Stack
      alignSelf={"center"}
      justifySelf={"center"}
      maxW={"500px"}
      spacing={"4"}
    >
      <Image src="/pokeball.png" />
      <Text fontWeight={"bold"} fontSize={"x-large"}>
        Ops... Nenhum pokemon foi encontrado
      </Text>
    </Stack>
  );
};
