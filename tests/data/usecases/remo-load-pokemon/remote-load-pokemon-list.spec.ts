import { faker } from '@faker-js/faker'

import { RemoteLoadPokemonListResult } from '@/data/usecases/remote-load-pokemon'
import { mockHttpResponse } from '@/tests/data/mocks'
import { HttpStatusCode, IHttpClient } from '@/data/protocols'

const fakeUrl = faker.internet.url()
const responseHttpClient = mockHttpResponse()

describe('RemoteLoadPokemonListResult', () => {
  let sut: RemoteLoadPokemonListResult
  let httpClient: jest.Mocked<IHttpClient>

  beforeEach(() => {
    httpClient = { request: jest.fn().mockReturnValue(responseHttpClient) }
    sut = new RemoteLoadPokemonListResult(fakeUrl, httpClient)
  })

  it('test IHttpClient', async () => {
    await sut.listAll()
    expect(httpClient.request).toHaveBeenCalledWith({ url: fakeUrl, method: 'get' })
    expect(httpClient.request).toHaveReturnedWith(responseHttpClient)
    httpClient.request.mockRejectedValueOnce(new Error())
    expect(httpClient.request).rejects.toThrowError()
  })

  it('should return a list of pokemon', async () => {
    const output = await sut.listAll()
    expect(output).toEqual(responseHttpClient.body)
  })

  it('should return a list empty', async () => {
    httpClient.request.mockResolvedValueOnce(mockHttpResponse(HttpStatusCode.badRequest))
    await expect(sut.listAll()).resolves.toEqual([])
  })
})
