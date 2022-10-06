import { HttpStatusCode } from '@/data/protocols'
import { faker } from '@faker-js/faker'
import { AxiosResponse } from 'axios'
import { makeNameAndUrl, toDoArrayForLength } from './helpers'

const makeAbility = (): any => ({
  ability: makeNameAndUrl(),
  is_hidden: faker.helpers.arrayElement([false, true]) ,
  slot: Number(faker.random.numeric(1))
})
const makeForms = (): any => ({ forms: makeNameAndUrl() })
const makeHeight = (): string => (faker.random.numeric(2))
const makeId = (): number => (Number(faker.random.numeric(4)))
const makeName = (): string => (faker.name.firstName())
const makeMoves = (): any => ({ move: makeNameAndUrl() })
const makeTypes = (): any => ({ type: makeNameAndUrl() })
const makeImg = (): any => ({
  dream_world: {
    front_default: faker.internet.url(),
    front_female: faker.internet.url()
  },
  'official-artwork': {
    front_default: faker.internet.url()
  },
  home: {
    front_default: faker.internet.url(),
    front_female: faker.internet.url(),
    front_shiny: faker.internet.url(),
    front_shiny_female: faker.internet.url()
  }
})

export const makePokemonResponse = (): any => ({
  abilities: toDoArrayForLength(Number(faker.random.numeric(1)), makeAbility()),
  forms: toDoArrayForLength(Number(faker.random.numeric(1)), makeForms()),
  height: makeHeight(),
  id: makeId(),
  name: makeName(),
  moves: toDoArrayForLength(Number(faker.random.numeric(1)), makeMoves()),
  types: toDoArrayForLength(Number(faker.random.numeric(1)),makeTypes()) ,
  sprites: { other: makeImg() }
})

export const makeAxiosResponseWithPokemon = (statusCode: number = HttpStatusCode.ok): AxiosResponse => ({
  status: statusCode,
  statusText: '',
  data: makePokemonResponse(),
  headers: {},
  config: {},
  request: {}
})
