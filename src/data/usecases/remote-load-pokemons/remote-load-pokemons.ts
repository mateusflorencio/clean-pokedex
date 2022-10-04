import { map } from '@/infra/http/helpers'
import { ILoadPokemons } from '@/domain/usecases/load-pokemons'
import { ServerError, UnexpectedError } from '@/data/errors'
import { IHttpClient } from '@/data/protocols'
import { UrlPokemon } from '@/domain/models'
import env from '@/main/config/env'

export class RemoteLoadPokemons implements ILoadPokemons {
  constructor (
    private readonly httpClient: IHttpClient<RemoteLoadPokemons.Response>) {}

  async load (offset: string = '0' , limit: string = '20'): Promise<UrlPokemon[]> {
    const url = `${env.url}/pokemon/?offset=${offset}&limit=${limit}`

    const httpReponse = map(await this.httpClient.request({ url ,method: 'get' }))
    switch (httpReponse.statusCode) {
      case 200: return httpReponse.body
      case 400: return []
      case 500: throw new ServerError()
      default : throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadPokemons {
  export type Response = {
    count: number
    next: string
    previous: string
    result: UrlPokemon[]
  }
}
