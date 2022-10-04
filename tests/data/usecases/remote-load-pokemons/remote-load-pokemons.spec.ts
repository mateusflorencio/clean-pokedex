import { IHttpClient } from '@/data/protocols'
import { RemoteLoadPokemons } from '@/data/usecases'
import { makeHttpReponseLoadPokemons } from '@/tests/domain/mocks'
import { faker } from '@faker-js/faker'

const url = faker.internet.url()

describe('RemoteLoadPokemons', () => {
  let mockedHttpClient: jest.Mocked<IHttpClient>
  let sut: RemoteLoadPokemons
  beforeEach(() => {
    mockedHttpClient = { request: jest.fn().mockResolvedValue(makeHttpReponseLoadPokemons()) }
    sut = new RemoteLoadPokemons(url, mockedHttpClient)
  })
  it('should call httpClient with correct values',async () => {
    await sut.load()
    const thisUrl = `${url}/pokemon/?offset=${0}&limit=${20}`
    expect(mockedHttpClient.request).toHaveBeenCalledWith({ url: thisUrl, method: 'get' })
  })
})
