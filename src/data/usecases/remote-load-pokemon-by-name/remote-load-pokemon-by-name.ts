import { ServerError, UnexpectedError } from '@/data/errors'
import { map } from '@/data/helpers'
import { IHttpClient } from '@/data/protocols'
import { Pokemon } from '@/domain/models'
import { ILoadPokemonByName } from '@/domain/usecases'
import env from '@/main/config/env'

export class RemoteLoadPokemonByName implements ILoadPokemonByName {
  constructor (private readonly httpCliente: IHttpClient) {}

  async loadByName (name: string): Promise<Pokemon> {
    const url = `${env.url}/${name.toLocaleLowerCase()}`
    const response = await this.httpCliente.request({ method: 'get', url })
    switch (response.statusCode) {
      case 200 : return map(response.body)
      case 500 : throw new ServerError()
      default: throw new UnexpectedError()
    }
  }
}
