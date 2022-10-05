import { Pokemon, UrlPokemon } from '../models'

export interface IListAllPokemon {
  listAll: (list: UrlPokemon[]) => Promise<Pokemon[]>
}
