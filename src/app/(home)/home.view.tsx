import { Input } from "../../components/Input";
import FilterIcon from "@/assets/filter.svg";
import { useHomeModel } from "./home.model";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import { MovieCard } from "./components/MovieCard";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

type HomeViewProps = ReturnType<typeof useHomeModel>;

export const HomeView = ({
    data,
    isError,
    isPending,
    error,
}: HomeViewProps) => {
    return (
        <section className="">
            <nav className="flex gap-3 mb-4 px-4 max-w-2xl mx-auto">
                <Input
                    name="filtro"
                    id="filter"
                    placeholder="Pesquise por filmes"
                />
                <button className="w-16 h-12 bg-primary-dark rounded-sm flex justify-center items-center">
                    <FilterIcon />
                </button>
            </nav>
            {isPending && (
                <div className="space-y-2 px-4">
                    <Skeleton className="h-6 " />
                    <Skeleton className="h-6 " />
                    <Skeleton className="h-6 " />
                    <Skeleton className="h-6 " />
                    <Skeleton className="h-6 " />
                </div>
            )}
            {isError && <p className="text-center">deu pau</p>}
            {data && (
                <div className="lg:px-4 ">
                    <ul className="grid grid-cols-2 gap-4 mb-6 bg-mauve-3 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {data.results.map((movie) => (
                            <Link key={movie.id} href={`/movie/${movie.id}`}>
                                <MovieCard movie={movie} />
                            </Link>
                        ))}
                    </ul>
                     
                    <PaginationWithLinks
                        page={data.page}
                        pageSize={20}
                        totalCount={data.total_results}
                        totalPages={data.total_pages}
                    />
                </div>
            )}
        </section>
    );
};
