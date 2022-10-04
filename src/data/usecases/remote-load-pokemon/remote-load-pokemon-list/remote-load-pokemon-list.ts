import { UnexpectedError } from '@/data/errors'
import { HttpStatusCode, IHttpClient } from '@/data/protocols'
import { Pokemon } from '@/domain/models'
import { Pokemon as PokemonList } from '@/data/models'
import { IListAllPokemon } from '@/domain/usecases'

export class RemoteLoadPokemonListResult implements IListAllPokemon {
  constructor (
    private readonly url: string,
    private readonly httpClient: IHttpClient<PokemonList[]>) {}

  async listAll (): Promise<Pokemon[]> {
    const httpReponse = await this.httpClient.request({ method: 'get', url: this.url })
    switch (httpReponse.statusCode) {
      case HttpStatusCode.ok: return httpReponse.body
      case HttpStatusCode.badRequest: return []
      default: throw new UnexpectedError()
    }
  }
}
