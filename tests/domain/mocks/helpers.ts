import { faker } from '@faker-js/faker'

export const toDoArrayForLength = <T>(length: number, type: T): T[] => {
  const arr = []
  for (let i = 0; i < length; i++) {
    arr.push(type)
  }
  return arr
}

export const makeNameAndUrl = (): any => ({
  name: faker.name.firstName(),
  url: faker.internet.url()
})
