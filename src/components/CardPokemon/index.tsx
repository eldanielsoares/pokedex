import { Card, CardBody, Stack, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { IListPokemon } from "../../@core/usecases/pokemon/domain/entities/list-pokemon";

export const CardPokemon: React.FC<IListPokemon> = ({ name, url }) => {
  return (
    <Card maxW="100%">
      <CardBody>
        <Image
          src={url}
          alt="Green double couch with wooden legs"
          w={"100%"}
          borderRadius="lg"
          alignSelf={"center"}
        />
        <Stack mt="2" spacing="3" align={"center"}>
          <Heading
            size="md"
            css={{
              "&:first-letter": {
                textTransform: "uppercase",
              },
            }}
          >
            {name}
          </Heading>
        </Stack>
      </CardBody>
    </Card>
  );
};
