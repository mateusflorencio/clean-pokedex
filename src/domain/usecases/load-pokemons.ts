import { UrlPokemon } from '../models'

export interface ILoadPokemons {
  load: (offset: string, limit: string) => Promise<ILoadPokemons.Response | null>
}

export namespace ILoadPokemons {
  export type Response = {
    count: number
    next: string
    previous: string
    result: UrlPokemon[]
  }
}
