export enum HttpMethod {
  GET = 'get',
  POST = 'post',
  DELETE = 'delete',
  PUT = 'put',
  PATCH = 'patch',
}

export type HttpRequest<TBody> = {
  endpoint: string,
  method: HttpMethod,
  body?: TBody,
  headers?: Record<string, string>
}

export interface IHttpClient {
  sendRequest: <TResponse, TBody = unknown>(request: HttpRequest<TBody>) => Promise<TResponse>
}