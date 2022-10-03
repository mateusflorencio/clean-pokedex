import { HttpStatusCode, HttpResponse } from '@/data/protocols'
import { faker } from '@faker-js/faker'

export const mockHttpResponse = (statusCode: HttpStatusCode = HttpStatusCode.ok): HttpResponse => ({
  statusCode,
  body: [faker.random.words(),faker.random.words()]
})
