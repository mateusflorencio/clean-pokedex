import { HttpStatusCode, IHttpClient } from '@/data/protocols'
import { Pokemon } from '@/domain/models'
import { IListAllPokemon } from '@/domain/usecases'

export class RemoteLoadPokemonListResult implements IListAllPokemon {
  constructor (private readonly url: string, private readonly httpClient: IHttpClient<RemoteLoadPokemonListResult.Pokemon[]>) {}

  async listAll (): Promise<Pokemon[]> {
    const httpReponse = await this.httpClient.request({ method: 'get', url: this.url })
    switch (httpReponse.statusCode) {
      case HttpStatusCode.ok: return httpReponse.body
      case HttpStatusCode.badRequest: return []
      case HttpStatusCode.serverError: throw new Error()
      default: throw new Error()
    }
  }
}

export namespace RemoteLoadPokemonListResult {
  export type Pokemon = {
    name: string
    abilitys: string[]
    forms: string[]
    height: string
    moves: string[]
    type: string
  }
}
