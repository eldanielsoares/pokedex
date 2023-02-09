export interface IListPokemon {
  name: string;
  url: string;
};

export class ListPokemon {
  constructor(public props: IListPokemon ){}

  get name(){
    return this.props.name;
  }

  get url() {
    return this.props.url;
  }

  toJSON(){
    return {
      name: this.name,
      url: this.url,
    }
  }
}