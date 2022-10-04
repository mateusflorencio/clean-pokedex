import { UrlPokemon } from '../models'

export interface ILoadPokemons {
  load: (offset: number, limit: number) => Promise<UrlPokemon[]>
}
