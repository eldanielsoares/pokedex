import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { IListPokemon } from "../../@core/usecases/pokemon/domain/entities/list-pokemon";
import { CardPokemon } from "../CardPokemon";

type GridProps = {
  pokemons: IListPokemon[];
};

export const GridsShowPokemons: React.FC<GridProps> = ({ pokemons }) => {
  function handleUrl(url: string): string {
    const filterUrl = url.split("/");

    const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${filterUrl[6]}.png`;

    return urlImage;
  }

  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
      ]}
      gap={4}
      flexWrap={"nowrap"}
      my={"8"}
    >
      {pokemons.map((pokemon, key) => (
        <GridItem w="100%" minW={"130px"} key={key}>
          <CardPokemon name={pokemon.name} url={handleUrl(pokemon.url)} />
        </GridItem>
      ))}
    </Grid>
  );
};
