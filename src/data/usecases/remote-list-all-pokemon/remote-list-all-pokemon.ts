import { Pokemon, UrlPokemon } from '@/domain/models'
import { IListAllPokemon } from '@/domain/usecases'
import { ILoadEachPokemon } from '@/domain/usecases/load-each-pokemon'

export class RemoteListAllPokemon implements IListAllPokemon {
  constructor (private readonly loadEach: ILoadEachPokemon) {}

  async listAll (list: UrlPokemon[]): Promise<Pokemon[]> {
    const result = await this.loadEach.loadEach(list)
    return result
  }
}
