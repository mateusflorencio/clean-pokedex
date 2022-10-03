import { Pokemon } from '../models'

export interface IListAllPokemon {
  listAll: () => Promise<Pokemon[]>
}
