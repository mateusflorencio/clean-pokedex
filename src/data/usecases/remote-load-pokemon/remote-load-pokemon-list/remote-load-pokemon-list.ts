import { IHttpClient } from '@/data/protocols'
import { Pokemon } from '@/domain/models'
import { IListAllPokemon } from '@/domain/usecases'
import { Pokemon as PokemonList } from '@/data/models'

export class RemoteLoadPokemonListResult implements IListAllPokemon {
  constructor (private readonly url: string, private readonly httpClient: IHttpClient<PokemonList[]>) {}
  async listAll (): Promise<Pokemon[]> {
    this.httpClient.request({ method: 'get', url: this.url })
    return null
  }
}
