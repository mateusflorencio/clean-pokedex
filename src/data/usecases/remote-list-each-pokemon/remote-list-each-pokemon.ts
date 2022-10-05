
import { IHttpClient } from '@/data/protocols'
import { UrlPokemon, Pokemon } from '@/domain/models'
import { ILoadEachPokemon } from '@/domain/usecases/load-each-pokemon'

export class RemoteListEachPokemon implements ILoadEachPokemon {
  constructor (private readonly httpClient: IHttpClient<Pokemon>) {}
  async loadEach (list: UrlPokemon[]): Promise<Pokemon[]> {
    const listPokemon: Pokemon[] = []

    list.forEach(({ url }) => {
      this.httpClient.request({ url, method: 'get' })
        .then((res) => listPokemon.push(res.statusCode === 200 ? res.body : null))
    })

    return listPokemon
  }
}
