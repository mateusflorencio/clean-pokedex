import { makeHttpResponse, makeUrlPokemon } from '@/tests/domain/mocks'
import { IHttpClient } from '@/data/protocols'
import { RemoteListEachPokemon } from '@/data/usecases'

const fakeResponse = makeHttpResponse()
const fakeUrlPokemon = makeUrlPokemon()

describe('RemoteListEachPokemon', () => {
  let mockedHttpClient: jest.Mocked<IHttpClient>
  let sut: RemoteListEachPokemon

  beforeEach(() => {
    mockedHttpClient = {
      request: jest.fn()
        .mockResolvedValue(fakeResponse)
    }
    sut = new RemoteListEachPokemon(mockedHttpClient)
  })

  it('should call httpClient with correct values',async () => {
    await sut.loadEach(fakeUrlPokemon)
    expect(mockedHttpClient.request).toHaveBeenCalledTimes(fakeUrlPokemon.length)
  })

  it('should return with correct values',async () => {
    const res = []
    fakeUrlPokemon.forEach(() => res.push(fakeResponse.body))
    expect(await sut.loadEach(fakeUrlPokemon)).toEqual(res)
  })

  it('should return throw if throws',async () => {
    mockedHttpClient.request.mockRejectedValueOnce(new Error())
    await expect(mockedHttpClient.request).rejects.toThrowError()
  })
})
