import { Movie } from "@/service/Movies/GetMoviesService";
import { useMovieCardModel } from "./component.model";

type Props = ReturnType<typeof useMovieCardModel> & { movie: Movie };

export const MovieCardView = ({
    movie,
    isErrorGenres,
    isPendingGenres,
    dataGenres,
}: Props) => {
    return (
        <li
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="aspect-[2/3] flex flex-col justify-end p-4 relative group"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

            <div className="flex flex-col gap-2 transition-all duration-300 ease-in-out group-hover:gap-3">
                {/* Título do filme */}
                <h6 className="text-[#FFF] font-bold text-sm uppercase z-10 transition-all duration-300">
                    {movie.title}
                </h6>

                {/* Gêneros (transição de opacidade e altura ao hover) */}
                <div
                    className="flex flex-wrap gap-1 text-[#FFF] z-10 opacity-0 max-h-0 overflow-hidden 
                    transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:max-h-20"
                >
                    {dataGenres?.genres
                        .filter((genre) => movie.genre_ids.includes(genre.id))
                        .map((genre, i) => (
                            <span
                                className="py-0.5 px-1.5 rounded bg-[#4b4b4b]"
                                key={"genre" + i + "-" + genre.id}
                            >
                                {genre.name}
                            </span>
                        ))}
                </div>
            </div>
        </li>
    );
};
