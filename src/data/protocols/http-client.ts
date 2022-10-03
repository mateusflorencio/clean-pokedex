export interface IHttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

export type HttpRequest = {
  url: string
  method: HttpMethod
}

export type HttpMethod = 'post' | 'get'

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T
}

export enum HttpStatusCode {
  ok = 200,
  badRequest = 400,
  serverError = 500
}
