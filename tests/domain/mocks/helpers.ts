import { TNameUrl } from '@/data/models/sub-models/name-url'
import { faker } from '@faker-js/faker'

export const toDoArrayForLength = <T>(length: number, type: T): T[] => {
  const arr = []
  for (let i = 0; i < length; i++) {
    arr.push(type)
  }
  return arr
}

export const makeNameAndUrl = (): TNameUrl => ({
  name: faker.name.firstName(),
  url: faker.internet.url()
})
