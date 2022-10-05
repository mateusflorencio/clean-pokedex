import { Pokemon, UrlPokemon } from '../models'

export interface ILoadEachPokemon {
  loadEach: (list: UrlPokemon[]) => Promise<Pokemon[]>
}
