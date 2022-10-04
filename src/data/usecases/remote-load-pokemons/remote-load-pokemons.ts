import { IHttpClient } from '@/data/protocols'
import { UrlPokemon } from '@/domain/models'
import { ILoadPokemons } from '@/domain/usecases/load-pokemons'

export class RemoteLoadPokemons implements ILoadPokemons {
  constructor (
    private readonly url: string,
    private readonly httpClient: IHttpClient<UrlPokemon[]>) {}

  async load (offset: number = 0 , limit: number = 20): Promise<UrlPokemon[]> {
    const url = `${this.url}/pokemon/?offset=${offset}&limit=${limit}`
    const httpReponse = await this.httpClient.request({ url ,method: 'get' })
    return httpReponse.body
  }
}
