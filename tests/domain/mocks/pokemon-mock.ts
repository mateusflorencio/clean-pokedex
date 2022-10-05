import { TAbility } from '@/data/models/sub-models/abilities'
import { TForms } from '@/data/models/sub-models/forms'
import { TImgs } from '@/data/models/sub-models/img'
import { TMoves } from '@/data/models/sub-models/moves'
import { TTypes } from '@/data/models/sub-models/type'
import { Pokemon } from '../models'
import { HttpStatusCode } from '@/data/protocols'
import { faker } from '@faker-js/faker'
import { AxiosResponse } from 'axios'
import { makeNameAndUrl, toDoArrayForLength } from './helpers'

const makeAbility = (): TAbility => ({
  ability: makeNameAndUrl(),
  is_hidden: faker.helpers.arrayElement([false, true]) ,
  slot: Number(faker.random.numeric(1))
})
const makeForms = (): TForms => ({ forms: makeNameAndUrl() })
const makeHeight = (): string => (faker.random.numeric(2))
const makeId = (): number => (Number(faker.random.numeric(4)))
const makeName = (): string => (faker.name.firstName())
const makeMoves = (): TMoves => ({ move: makeNameAndUrl() })
const makeTypes = (): TTypes => ({ type: makeNameAndUrl() })
const makeImg = (): TImgs => ({
  dreamWorld: {
    frontDefault: faker.internet.url(),
    frontFemale: faker.internet.url()
  },
  officialArtwork: {
    frontDefault: faker.internet.url()
  },
  home: {
    frontDefault: faker.internet.url(),
    frontFemale: faker.internet.url(),
    frontShiny: faker.internet.url(),
    frontShiny_female: faker.internet.url()
  }
})

export const makePokemonResponse = (): Pokemon => ({
  abilities: toDoArrayForLength(Number(faker.random.numeric(1)), makeAbility()),
  forms: toDoArrayForLength(Number(faker.random.numeric(1)), makeForms()),
  height: makeHeight(),
  id: makeId(),
  name: makeName(),
  moves: toDoArrayForLength(Number(faker.random.numeric(1)), makeMoves()),
  types: toDoArrayForLength(Number(faker.random.numeric(1)),makeTypes()) ,
  img: makeImg()
})

export const makeAxiosResponseWithPokemon = (statusCode: number = HttpStatusCode.ok): AxiosResponse => ({
  status: statusCode,
  statusText: '',
  data: makePokemonResponse(),
  headers: {},
  config: {},
  request: {}
})
