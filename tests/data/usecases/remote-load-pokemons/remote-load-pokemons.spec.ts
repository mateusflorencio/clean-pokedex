import { IHttpClient } from '@/data/protocols'
import { RemoteLoadPokemons } from '@/data/usecases'
import { makeHttpResponse } from '@/tests/domain/mocks'
import env from '@/main/config/env'
import { ServerError, UnexpectedError } from '@/data/errors'
import { faker } from '@faker-js/faker'

const fakeHttpResponse = makeHttpResponse()

describe('RemoteLoadPokemons', () => {
  let mockedHttpClient: jest.Mocked<IHttpClient>
  let sut: RemoteLoadPokemons

  beforeEach(() => {
    mockedHttpClient = { request: jest.fn().mockResolvedValue(fakeHttpResponse) }
    sut = new RemoteLoadPokemons(mockedHttpClient)
  })

  it('should call httpClient with correct values',async () => {
    await sut.load()
    const thisUrl = `${env.url}/pokemon/?offset=${0}&limit=${20}`
    expect(mockedHttpClient.request).toHaveBeenCalledWith({ url: thisUrl, method: 'get' })
  })

  it('should call httpClient with correct params',async () => {
    const offset = faker.random.numeric()
    const limit = faker.random.numeric()
    await sut.load(offset, limit)
    const thisUrl = `${env.url}/pokemon/?offset=${offset}&limit=${limit}`
    expect(mockedHttpClient.request).toHaveBeenCalledWith({ url: thisUrl, method: 'get' })
  })

  it('should return with correct values',async () => {
    expect(await sut.load()).toEqual(fakeHttpResponse.body)
  })

  it('should return a list empty if bad request', async () => {
    mockedHttpClient.request.mockResolvedValueOnce({ statusCode: 400 })
    await expect(sut.load()).resolves.toEqual([])
  })

  it('should return throw if serverError',async () => {
    mockedHttpClient.request.mockResolvedValueOnce({ statusCode: 500 })
    await expect(sut.load()).rejects.toThrow(new ServerError())
  })

  it('should return throw if throws',async () => {
    const error = new UnexpectedError()
    mockedHttpClient.request.mockRejectedValueOnce(error)
    await expect(sut.load()).rejects.toThrow(error)
  })

  it('should return throw if throws',async () => {
    mockedHttpClient.request.mockResolvedValueOnce({ statusCode: 1000 })
    await expect(sut.load()).rejects.toThrow(new UnexpectedError())
  })
})
