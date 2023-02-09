import { Flex, Input } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import { container, Registry } from "../@core/shared/container-registry";
import { ListPokemonUseCase } from "../@core/usecases/pokemon/application/list-pokemon";
import { IListPokemon } from "../@core/usecases/pokemon/domain/entities/list-pokemon";
import { EmptyList } from "../components/EmptyList";
import { GridsShowPokemons } from "../components/GridsShowPokemons";
import { Header } from "../components/Header";

type HomeProps = {
  pokemons: IListPokemon[];
};

export const Home: NextPage<HomeProps> = ({ pokemons }) => {
  const [search, setSearch] = useState("");

  const filterPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Flex minH={"100vh"} direction={"column"} px={"6"}>
        <Header />
        <Input
          value={search}
          maxW={"400px"}
          placeholder={"Digite o nome do pokemon"}
          variant="outline"
          onChange={(event) => setSearch(event.target.value)}
        />

        {filterPokemons.length == 0 && search && <EmptyList />}
        <GridsShowPokemons
          pokemons={
            filterPokemons.length == 0 && !search ? pokemons : filterPokemons
          }
        />
      </Flex>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const useCase = container.get<ListPokemonUseCase>(
    Registry.ListPokemonUseCase
  );
  const pokemons = await useCase.execute();

  return {
    props: {
      pokemons,
    },
  };
};
