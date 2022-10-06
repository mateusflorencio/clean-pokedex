import { IHttpClient } from '@/data/protocols'
import { AxiosHttpClient } from '@/infra/http'

export const makeHttpClient = (): IHttpClient => (new AxiosHttpClient())
