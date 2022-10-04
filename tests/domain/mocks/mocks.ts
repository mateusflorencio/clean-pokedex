import { HttpStatusCode, HttpResponse, HttpRequest, HttpMethod } from '@/data/protocols'
import { faker } from '@faker-js/faker'

export const fakeHttpResponse = (statusCode: HttpStatusCode = HttpStatusCode.ok): HttpResponse => ({
  statusCode,
  body: [faker.random.words(), faker.random.words()]
})

export const fakeHttpRequest = (method: HttpMethod = 'get', url: string = faker.internet.url()): HttpRequest => ({
  method,
  url
})
