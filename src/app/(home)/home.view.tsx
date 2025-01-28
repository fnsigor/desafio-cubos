import { Input } from "../../components/Input";
import FilterIcon from "@/assets/filter.svg";
import { useHomeModel } from "./home.model";

type HomeViewProps = ReturnType<typeof useHomeModel>;

export const HomeView = ({
    data,
    isError,
    isPending,
    error,
}: HomeViewProps) => {
    return (
        <section className="p-4">
            <nav className="flex gap-3 mb-4">
                <Input
                    name="filtro"
                    id="filter"
                    placeholder="Pesquise por filmes"
                />
                <button className="w-16 h-12 bg-primary-dark rounded-sm flex justify-center items-center">
                    <FilterIcon />
                </button>
            </nav>
            {isPending && <div>buscando dados</div>}
            {isError && <div>deu pau</div>}
            {data && (
                <>
                    <ul className="grid grid-cols-2 gap-4">
                        {data.results.map((movie) => (
                            <li
                                key={movie.id}
                                style={{
                                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                                className="h-72 flex flex-col justify-end p-4 relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                                <h6 className="text-text-primary font-bold text-sm uppercase z-10">
                                    {movie.title}
                                </h6>
                            </li>
                        ))}
                    </ul>
                    
                </>
            )}
        </section>
    );
};
