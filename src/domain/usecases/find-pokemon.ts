import { Pokemon } from '../models'

export interface FindPokemonByName {
  findByName: (name: string) => Promise<Pokemon>
}
