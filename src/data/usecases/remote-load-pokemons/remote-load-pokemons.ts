import { ILoadPokemons } from '@/domain/usecases/load-pokemons'
import { ServerError, UnexpectedError } from '@/data/errors'
import { IHttpClient } from '@/data/protocols'
import { UrlPokemon } from '@/domain/models'
import env from '@/main/config/env'

export class RemoteLoadPokemons implements ILoadPokemons {
  constructor (
    private readonly httpClient: IHttpClient) {}

  async load (offset: number = 0 , limit: number = 20): Promise<ILoadPokemons.Response | null> {
    const url = `${env.url}/?offset=${offset}&limit=${limit}`

    const httpReponse = await this.httpClient.request({ url ,method: 'get' })
    switch (httpReponse.statusCode) {
      case 200: return map(httpReponse.body)
      case 400: return null
      case 500: throw new ServerError()
      default : throw new UnexpectedError()
    }
  }
}

export const map = (body: any): RemoteLoadPokemons.Response => ({
  count: body.count,
  next: body.next,
  previous: body.previous,
  result: body.results
})

export namespace RemoteLoadPokemons {
  export type Response = {
    count: number
    next: string
    previous: string
    result: UrlPokemon[]
  }
}
