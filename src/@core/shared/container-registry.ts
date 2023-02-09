import "reflect-metadata";
import { ListPokemonUseCase } from './../usecases/pokemon/application/list-pokemon';

import {Container} from 'inversify';
import { ListPokemonHttpGateway } from '../usecases/pokemon/infra/gateways/list-pokemon-http.gateway';
import { http } from './infra/http';

export const container = new Container();

export const Registry = {
  AxiosAdapter : Symbol.for('AxiosAdapter'),

  ListPokemonUseCase : Symbol.for('ListPokemonUseCase'),
  
  
  ListPokemonGateway : Symbol.for('ListPokemonGateway'),

}

// #### HTTP
container.bind(Registry.AxiosAdapter).toConstantValue(http);

// #### GATEWAYS
container.bind(Registry.ListPokemonGateway).toDynamicValue((context)=> {
  return new ListPokemonHttpGateway(context.container.get(Registry.AxiosAdapter))
});

// #### USE CASES
container.bind(Registry.ListPokemonUseCase).toDynamicValue((context)=> {
  return new ListPokemonUseCase(context.container.get(Registry.ListPokemonGateway))
})