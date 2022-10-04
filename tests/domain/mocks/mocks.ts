import { HttpStatusCode, HttpResponse, HttpRequest, HttpMethod } from '@/data/protocols'
import { faker } from '@faker-js/faker'
import { AxiosResponse } from 'axios'

export const makeHttpResponse = (statusCode: HttpStatusCode = HttpStatusCode.ok): HttpResponse => ({
  statusCode,
  body: [faker.random.words(), faker.random.words()]
})

export const fakeHttpRequest = (method: HttpMethod = 'get', url: string = faker.internet.url()): HttpRequest => ({
  method,
  url
})

export const makeAxiosResponse = (statusCode: number = HttpStatusCode.ok): AxiosResponse => ({
  status: statusCode,
  statusText: '',
  data: {
    count: 1154,
    next: faker.internet.url(),
    previous: faker.internet.url(),
    results: [{
      name: faker.name.firstName(),
      url: faker.internet.url()
    },
    {
      name: faker.name.firstName(),
      url: faker.internet.url()
    }]
  },
  headers: {},
  config: {},
  request: {}
})
