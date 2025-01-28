import axios, { AxiosError, AxiosInstance } from 'axios'
import { HttpRequest, IHttpClient } from './httpClientContract'


export class HttpClient implements IHttpClient {
  constructor(
    private api: AxiosInstance = axios,
    private baseUrl: string = 'https://api.themoviedb.org/3/'
  ) { }


  static create(){
    return new HttpClient()
  }


  async sendRequest<TResponse, Tbody>(props: HttpRequest<Tbody>) {
    const { endpoint, method, body, headers } = props
    try {
      const { data } = await this.api.request<TResponse>({
        url: `${this.baseUrl}${endpoint}`,
        method,
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmQ1MmJhODc2ZjY5NmU2OGQ4NTA1ZTVmYTgyMGJjMSIsIm5iZiI6MTY2NDEyOTk0NC45NTM5OTk4LCJzdWIiOiI2MzMwOWI5ODhkMmY4ZDAwODA0OWFiMTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.A_fTqD9kS80f3qSDXGKGo4a3pCPYiuYLwnFlflDRT0I',
          'Accept': 'application/json',
          ...headers,
        },
        data: body
      })

      return data

    } catch (err) {
      console.log(`ERROR ${method} ${endpoint}:`, err)
      const error = err as AxiosError
      const status = error.response?.status || 500
      const message = error.response?.data || error.message
      throw new Error(`Request failed with status ${status}: ${message}`)
    }
  }
}