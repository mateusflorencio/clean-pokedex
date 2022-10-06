import { makeAxiosResponseWithPokemon } from '@/../tests/domain/mocks'
import { IHttpClient } from '@/data/protocols'
import { map as axiosHelpers } from '@/infra/http/helpers'
import env from '@/main/config/env'
import { faker } from '@faker-js/faker'
import { map as mapPokemonResponse } from '@/data/helpers'
import { RemoteLoadPokemonByName } from '@/data/usecases'

const fakeResponse = axiosHelpers(makeAxiosResponseWithPokemon())

describe('RemoteLoadPokemonByName', () => {
  let mockedHttpClient: jest.Mocked<IHttpClient>
  let sut: RemoteLoadPokemonByName

  beforeEach(() => {
    mockedHttpClient = { request: jest.fn().mockResolvedValue(fakeResponse) }
    sut = new RemoteLoadPokemonByName(mockedHttpClient)
  })
  it('should call with correct value', async () => {
    const fakerName = faker.name.firstName()
    const url = `${env.url}/${fakerName.toLocaleLowerCase()}`
    await sut.loadByName(fakerName)
    expect(mockedHttpClient.request).toHaveBeenCalledWith({ method: 'get', url })
  })

  it('should return with correct value', async () => {
    expect(await sut.loadByName(faker.name.firstName())).toEqual(mapPokemonResponse(fakeResponse.body))
  })

  it('should throw if any statusCode', async () => {
    mockedHttpClient.request.mockResolvedValueOnce({ statusCode: 600 })
    await expect(sut.loadByName(faker.name.firstName())).rejects.toThrowError()
  })

  it('should throw if 400', async () => {
    mockedHttpClient.request.mockResolvedValueOnce({ statusCode: 400 })
    await expect(sut.loadByName(faker.name.firstName())).rejects.toThrowError()
  })

  it('should throw if 500', async () => {
    mockedHttpClient.request.mockResolvedValueOnce({ statusCode: 500 })
    await expect(sut.loadByName(faker.name.firstName())).rejects.toThrowError()
  })

  it('should throw if throws', async () => {
    mockedHttpClient.request.mockRejectedValueOnce(new Error())
    await expect(sut.loadByName(faker.name.firstName())).rejects.toThrowError()
  })
})
