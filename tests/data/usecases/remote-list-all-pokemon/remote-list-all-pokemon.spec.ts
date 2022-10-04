import { faker } from '@faker-js/faker'

import { RemoteListAllPokemon } from '@/data/usecases'
import { makeHttpResponse } from '@/../tests/domain/mocks'
import { HttpStatusCode, IHttpClient } from '@/data/protocols'
import { UnexpectedError } from '@/data/errors'

const fakeUrl = faker.internet.url()
const responseHttpClient = makeHttpResponse()

describe('RemoteListAllPokemon', () => {
  let sut: RemoteListAllPokemon
  let httpClient: jest.Mocked<IHttpClient>

  beforeEach(() => {
    httpClient = { request: jest.fn().mockReturnValue(responseHttpClient) }
    sut = new RemoteListAllPokemon(fakeUrl, httpClient)
  })

  it('test IHttpClient', async () => {
    await sut.listAll()
    expect(httpClient.request).toHaveBeenCalledWith({ url: fakeUrl, method: 'get' })
    expect(httpClient.request).toHaveReturnedWith(responseHttpClient)
    httpClient.request.mockRejectedValueOnce(new Error())
    expect(httpClient.request).rejects.toThrowError()
  })

  it('should return a list of pokemon', async () => {
    await expect(sut.listAll()).resolves.toEqual(responseHttpClient.body)
  })

  it('should return a list empty if bad request', async () => {
    httpClient.request.mockResolvedValueOnce(makeHttpResponse(HttpStatusCode.badRequest))
    await expect(sut.listAll()).resolves.toEqual([])
  })

  it('should return throw if serverError',async () => {
    httpClient.request.mockResolvedValueOnce(makeHttpResponse(HttpStatusCode.serverError))
    await expect(sut.listAll()).rejects.toThrow()
  })

  it('should return throw if throws', async () => {
    httpClient.request.mockRejectedValueOnce(new Error())
    await expect(sut.listAll()).rejects.toThrow()
  })

  it('should return throw if throws',async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 1000 })
    await expect(sut.listAll()).rejects.toThrow(new UnexpectedError())
  })
})
