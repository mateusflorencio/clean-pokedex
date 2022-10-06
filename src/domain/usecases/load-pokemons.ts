import { UrlPokemon } from '../models'

export interface ILoadPokemons {
  load: (offset: number, limit: number) => Promise<ILoadPokemons.Response | null>
}

export namespace ILoadPokemons {
  export type Response = {
    count: number
    next: string
    previous: string
    result: UrlPokemon[]
  }
}
