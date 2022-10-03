import { HttpStatusCode, HttpResponse } from '@/data/protocols'
import { faker } from '@faker-js/faker'

export const mockHttpResponse = (number: HttpStatusCode = HttpStatusCode.ok): HttpResponse => ({
  statusCode: number,
  body: [faker.random.words(),faker.random.words()]
})
