import { HttpRequest, HttpResponse, IHttpClient } from '@/data/protocols'
import axios from 'axios'
import { map } from './helpers'

export class AxiosHttpClient implements IHttpClient {
  async request ({ url, method }: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await axios.request({ url, method })
    return map(httpResponse)
  }
}
