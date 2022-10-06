import { Pokemon } from '../models'

export interface ILoadPokemonByName {
  loadByName: (name: string) => Promise<Pokemon>
}
