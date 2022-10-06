
import { IHttpClient } from '@/data/protocols'
import { UrlPokemon, Pokemon } from '@/domain/models'
import { ILoadEachPokemon } from '@/domain/usecases/load-each-pokemon'
import { map as util } from './helpers'

export class RemoteListEachPokemon implements ILoadEachPokemon {
  constructor (private readonly httpClient: IHttpClient<Pokemon>) {}
  async loadEach (list: UrlPokemon[]): Promise<Pokemon[]> {
    return Promise.all(list.map(async ({ url }) =>
      util((
        await this.httpClient.request({ url, method: 'get' })).body)))
  }
}
