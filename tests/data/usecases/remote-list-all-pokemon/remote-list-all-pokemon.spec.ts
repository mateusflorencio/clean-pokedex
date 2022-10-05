import { makePokemonResponse, makeUrlPokemon } from '@/tests/domain/mocks'
import { RemoteListAllPokemon } from '@/data/usecases'
import { ILoadEachPokemon } from '@/domain/usecases/load-each-pokemon'

const fakeUrlPokemon = makeUrlPokemon()
const fakeUrlResponse = makePokemonResponse()

describe('RemoteListAllPokemon', () => {
  let mockedLoadEach: jest.Mocked<ILoadEachPokemon>
  let sut: RemoteListAllPokemon

  beforeEach(() => {
    mockedLoadEach = { loadEach: jest.fn().mockReturnValue(fakeUrlResponse) }
    sut = new RemoteListAllPokemon(mockedLoadEach)
  })

  it('should return a list of pokemon', async () => {
    await expect(sut.listAll(fakeUrlPokemon)).resolves.toEqual(fakeUrlResponse)
  })

  it('should return throw if Throwa', async () => {
    mockedLoadEach.loadEach.mockRejectedValueOnce(new Error())
    await expect(sut.listAll(fakeUrlPokemon)).rejects.toThrow()
  })
})
