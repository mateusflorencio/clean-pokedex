import { UrlPokemon } from '../models'

export interface ILoadPokemons {
  load: (offset: string, limit: string) => Promise<UrlPokemon[]>
}
