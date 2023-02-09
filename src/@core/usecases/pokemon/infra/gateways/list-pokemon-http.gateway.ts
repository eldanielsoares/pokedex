import { AxiosInstance } from "axios";
import { ListPokemon } from "../../domain/entities/list-pokemon";
import { ListPokemonGateway } from "../../domain/gateways/list-pokemon";

export class ListPokemonHttpGateway implements ListPokemonGateway {
  constructor (private http: AxiosInstance){}
  
  async findAll(): Promise<ListPokemon[]> {
    const {data} = await this.http.get('?limit=100');
    return data.results;
  }

}