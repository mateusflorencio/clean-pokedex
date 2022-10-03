import { HttpStatusCode, HttpResponse } from '@/data/protocols'
import { faker } from '@faker-js/faker'

export const mockHttpResponse = (number: HttpStatusCode = 200): HttpResponse => ({
  statusCode: number,
  body: faker.random.words()
})
