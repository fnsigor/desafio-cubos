import { Movie } from "@/service/Movies/GetMoviesService";
import { useMovieCardModel } from "./component.model";

type Props = ReturnType<typeof useMovieCardModel> & { movie: Movie };

export const MovieCardView = ({
  movie,
  isErrorGenres,
  isPendingGenres,
  dataGenres
}: Props) => {
    return (
        <li
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="aspect-[2/3] flex flex-col justify-end p-4 relative"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

            <h6 className="text-[#FFF] font-bold text-sm uppercase z-10">
                {movie.title}
            </h6>

            <div>{dataGenres?.genres.map((genre, i) =>(
              <span key={"genre"+i+"-"+genre.id}></span>
            ))}</div>
        </li>
    );
};
