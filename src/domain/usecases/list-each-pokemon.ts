import { Pokemon, UrlPokemon } from '../models'

export interface IListEachPokemon {
  loadEach: (list: UrlPokemon[]) => Promise<Pokemon[]>
}
