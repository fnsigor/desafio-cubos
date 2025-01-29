import { Movie } from "@/service/Movies/GetMoviesService";
import { MovieCardView } from "./component.view";
import { GetGenresService } from "@/service/Genres/GetGenresService";
import { HttpClient } from "@/infra/http/HttpClient";
import { useMovieCardModel } from "./component.model";

type Props = {
    movie: Movie;
};

export const MovieCard = ({ movie }: Props) => {
    const httpClient = HttpClient.create();

    const service = new GetGenresService(httpClient);

    const methods = useMovieCardModel({
        getGenres: service,
    });

    return <MovieCardView {...methods} movie={movie} />;
};
