import { HttpResponse } from '@/data/protocols'

export const map = (response: any): HttpResponse => (
  {
    statusCode: response.status,
    body: response.data
  }
)
