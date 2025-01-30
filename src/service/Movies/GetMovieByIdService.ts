import { HttpMethod, IHttpClient } from "@/infra/http/httpClientContract";

type Genre = {
  id: number;
  name: string;
};

type ProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type Movie = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | object;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

interface IReturn extends Movie {}


export interface IGetMovieByIdService {
  execute: (movieId: number) => Promise<IReturn>
}


export class GetMovieByIdService implements IGetMovieByIdService {
  constructor(private readonly httpClient: IHttpClient) { }

  async execute(movieId: number) {


    const responseGetMovies = await this.httpClient.sendRequest<IReturn, null>({
      method: HttpMethod.GET,
      endpoint: `/movie/${movieId}?language=pt-BR`,
      
    })
    return responseGetMovies

  }
}