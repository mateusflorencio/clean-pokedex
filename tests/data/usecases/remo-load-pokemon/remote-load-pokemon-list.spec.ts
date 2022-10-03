import { faker } from '@faker-js/faker'

import { RemoteLoadPokemonListResult } from '@/data/usecases/remote-load-pokemon'
import { mockHttpResponse } from '@/tests/data/mocks'
import { IHttpClient } from '@/data/protocols'

const fakeUrl = faker.internet.url()

describe('RemoteLoadPokemonListResult', () => {
  let sut: RemoteLoadPokemonListResult
  let httpClient: jest.Mocked<IHttpClient>

  beforeEach(() => {
    httpClient = { request: jest.fn().mockReturnValue(mockHttpResponse()) }
    sut = new RemoteLoadPokemonListResult(fakeUrl, httpClient)
  })

  it('should call httpClient with correct values', async () => {
    await sut.listAll()
    expect(httpClient.request).toHaveBeenCalledWith({ url: fakeUrl, method: 'get' })
  })
})
