import { IHttpClient, HttpResponse } from '@/data/protocols'
import { RemoteLoadPokemons } from '@/data/usecases'
import { makeAxiosResponse } from '@/tests/domain/mocks'
import env from '@/main/config/env'
import { UnexpectedError } from '@/data/errors'
import { faker } from '@faker-js/faker'

const httpClienteReponse = makeAxiosResponse()

describe('RemoteLoadPokemons', () => {
  let mockedHttpClient: jest.Mocked<IHttpClient>
  let sut: RemoteLoadPokemons
  beforeEach(() => {
    mockedHttpClient = { request: jest.fn().mockResolvedValue(httpClienteReponse) }
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
    expect(await sut.load()).toEqual(httpClienteReponse.data)
  })

  it('should return a list empty if bad request', async () => {
    mockedHttpClient.request.mockResolvedValueOnce(makeAxiosResponse(400) as unknown as HttpResponse)
    await expect(sut.load()).resolves.toEqual([])
  })

  it('should return throw if serverError',async () => {
    mockedHttpClient.request.mockResolvedValueOnce(makeAxiosResponse(500) as unknown as HttpResponse)
    await expect(sut.load()).rejects.toThrow()
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
