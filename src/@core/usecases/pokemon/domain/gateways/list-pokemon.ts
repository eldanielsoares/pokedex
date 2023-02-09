import { ListPokemon } from "../entities/list-pokemon";

export interface ListPokemonGateway {
  findAll(): Promise<ListPokemon[]>;
}