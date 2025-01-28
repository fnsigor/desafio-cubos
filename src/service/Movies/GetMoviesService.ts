import { HttpMethod, IHttpClient } from "@/infra/http/httpClientContract";

export type Movie = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

interface IReturn {
  page: number
  results: Movie[]
  total_pages: number,
  total_result: number
}

type Params = {
  endpoint?: string,

}

export interface IGetMoviesService {
  execute: (params?: Params) => Promise<IReturn>
}


export class GetMoviesService implements IGetMoviesService {
  constructor(private readonly httpClient: IHttpClient) { }

  async execute(params?: Params) {
    const responseGetMovies = await this.httpClient.sendRequest<IReturn, null>({
      method: HttpMethod.GET,
      endpoint: params?.endpoint ?? '/discover/movie',
    })
    return responseGetMovies

  }
}