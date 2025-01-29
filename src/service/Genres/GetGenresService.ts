import { HttpMethod, IHttpClient } from "@/infra/http/httpClientContract";

export type Genre = {
  name: string
  id: number
}

interface IReturn {
  genres: Genre[]
}


export interface IGetGenresService {
  execute: () => Promise<IReturn>
}


export class GetGenresService implements IGetGenresService {
  constructor(private readonly httpClient: IHttpClient) { }

  async execute() {


    const responseGetMovies = await this.httpClient.sendRequest<IReturn, null>({
      method: HttpMethod.GET,
      endpoint: 'https://api.themoviedb.org/3/genre/movie/list?language=pt-BR',
      
    })
    return responseGetMovies

  }
}