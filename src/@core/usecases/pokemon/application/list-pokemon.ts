import { ListPokemon } from "../domain/entities/list-pokemon";
import { ListPokemonGateway } from "../domain/gateways/list-pokemon";

export class ListPokemonUseCase {
  constructor (private pokemonGateway: ListPokemonGateway  ){}
  
  async execute(): Promise<ListPokemon[]> {
    return this.pokemonGateway.findAll();
  }
}