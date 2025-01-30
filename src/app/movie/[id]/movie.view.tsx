import { useMovieModel } from "./movie.model";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

type MovieViewProps = ReturnType<typeof useMovieModel>;

export const MovieView = ({
    data,
    isError,
    isPending,
    handleBack,
}: MovieViewProps) => {
    if (isPending) {
        return (
            <section className="px-1 space-y-2">
                <Skeleton className="h-6 " />
                <Skeleton className="h-6 " />
                <Skeleton className="h-6 " />
                <Skeleton className="h-6 " />
                <Skeleton className="h-6 " />
            </section>
        );
    }

    return (
        <section className="px-4 flex flex-wrap justify-center w-full max-w-full">
            {/* MOBILE */}
            <div className="lg:hidden">
                <div className="flex justify-end">
                    <button
                        className="bg-primary-dark mb-3 px-5 py-1 rounded text-text-primary"
                        onClick={handleBack}
                    >
                        Voltar
                    </button>
                </div>
                <div>
                    <img
                        src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
                        alt={data?.title ?? "filme"}
                        // width={382}
                        // height={582}
                        className="mb-8 block mx-auto aspect-[2/3]"
                    />
                    <div className="box-middle">
                        <article className="mb-6 rounded">
                            <h1 className="text-text-primary font-semibold text-3xl">
                                {data?.title}
                            </h1>
                            <p className="text-text-secondary">
                                Titulo original: {data?.original_title}
                            </p>
                            <blockquote className="text-text-primary italic">
                                {data?.tagline}
                            </blockquote>
                        </article>
                        <article className="flex gap-4 mb-6 rounded">
                            <div className="bg-mauve-5 p-4 rounded grow">
                                <p className="text-text-secondary font-bold text-xs">
                                    POPULARIDADE
                                </p>
                                <span className="text-text-primary font-bold text-sm">
                                    {data?.popularity}
                                </span>
                            </div>
                            <div className="bg-mauve-5 p-4 rounded grow">
                                <p className="text-text-secondary font-bold text-xs">
                                    VOTOS
                                </p>
                                <span className="text-texZt-primary font-bold text-sm">
                                    {data?.vote_average}
                                </span>
                            </div>
                        </article>
                        <article className="p-4 bg-mauve-5 mb-6 rounded">
                            <p className="text-text-secondary font-bold mb-2">
                                SINOPSE
                            </p>
                            <blockquote className="text-text-secondary">
                                {data?.overview}
                            </blockquote>
                        </article>
                        <article className="p-4 bg-mauve-5 rounded mb-6">
                            <p className="text-text-secondary font-bold mb-2">
                                Generos
                            </p>
                            <ul className="flex gap-2">
                                {data?.genres.map((genre) => (
                                    <li
                                        key={genre.id + genre.name}
                                        className="px-2 py-1 bg-primary-dark rounded"
                                    >
                                        {genre.name}
                                    </li>
                                ))}
                            </ul>
                        </article>
                        <article>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-mauve-5 p-4 rounded">
                                    <p className="text-text-secondary font-bold text-xs mb-2">
                                        LANÇAMENTO
                                    </p>
                                    <span className="text-text-primary text-sm">
                                        {data?.release_date}
                                    </span>
                                </div>
                                <div className="bg-mauve-5 p-4 rounded">
                                    <p className="text-text-secondary font-bold text-xs mb-2">
                                        DURAÇÃO
                                    </p>
                                    <span className="text-text-primary text-sm">
                                        {data?.runtime}
                                    </span>
                                </div>
                                <div className="bg-mauve-5 p-4 rounded">
                                    <p className="text-text-secondary font-bold text-xs mb-2">
                                        SITUAÇÃO
                                    </p>
                                    <span className="text-text-primary text-sm">
                                        {data?.status}
                                    </span>
                                </div>
                                <div className="bg-mauve-5 p-4 rounded">
                                    <p className="text-text-secondary font-bold text-xs mb-2">
                                        IDIOMA
                                    </p>
                                    <span className="text-text-primary text-sm">
                                        {data?.original_language}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-4 mb-6">
                                <div className="bg-mauve-5 p-4 rounded grow">
                                    <p className="text-text-secondary font-bold text-xs mb-2">
                                        ORÇAMENTO
                                    </p>
                                    <span className="text-text-primary text-sm">
                                        {data?.budget}
                                    </span>
                                </div>
                                <div className="bg-mauve-5 p-4 rounded grow">
                                    <p className="text-text-secondary font-bold text-xs mb-2">
                                        RECEITA
                                    </p>
                                    <span className="text-text-primary text-sm">
                                        {data?.revenue}
                                    </span>
                                </div>
                                <div className="bg-mauve-5 p-4 rounded grow">
                                    <p className="text-text-secondary font-bold text-xs mb-2">
                                        LUCRO
                                    </p>
                                    <span className="text-text-primary text-sm">
                                        {data?.revenue}
                                    </span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div>{/* iframe */}</div>
            </div>

            {/* DESKTOP */}

            <div className="hidden lg:block py-4 w-full max-w-full">
                <div className="flex justify-end mb-8">
                    <button
                        className="bg-primary-dark px-5 py-1 rounded text-text-primary"
                        onClick={handleBack}
                    >
                        Voltar
                    </button>
                </div>
                <div className="flex gap-8 justify-between">
                    <img
                        src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
                        alt={data?.title ?? "filme"}
                        // width={382}
                        // height={582}
                        className="mb-8 h-[542px]"
                    />
                    <div className="grow max-w-[50%]">
                        <article className="mb-6 rounded">
                            <h1 className="text-text-primary font-semibold text-3xl">
                                {data?.title}
                            </h1>
                            <p className="text-text-secondary">
                                Titulo original: {data?.original_title}
                            </p>
                            <blockquote className="text-text-primary italic">
                                {data?.tagline}
                            </blockquote>
                        </article>
                        <article className="p-4 bg-mauve-5 mb-6 rounded">
                            <p className="text-text-secondary font-bold mb-2">
                                SINOPSE
                            </p>
                            <blockquote className="text-text-secondary">
                                {data?.overview}
                            </blockquote>
                        </article>
                        <article className="p-4 bg-mauve-5 rounded mb-6">
                            <p className="text-text-secondary font-bold mb-2">
                                Generos
                            </p>
                            <ul className="flex gap-2">
                                {data?.genres.map((genre) => (
                                    <li
                                        key={genre.id + genre.name}
                                        className="px-2 py-1 bg-primary-dark rounded"
                                    >
                                        {genre.name}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </div>
                    <div className="grow ">
                        <article className="flex gap-4 mb-6 rounded justify-end">
                            <div className="bg-mauve-5 p-4 rounded">
                                <p className="text-text-secondary font-bold text-xs">
                                    POPULARIDADE
                                </p>
                                <span className="text-text-primary font-bold text-sm">
                                    {data?.popularity}
                                </span>
                            </div>
                            <div className="bg-mauve-5 p-4 rounded">
                                <p className="text-text-secondary font-bold text-xs">
                                    VOTOS
                                </p>
                                <span className="text-texZt-primary font-bold text-sm">
                                    {data?.vote_average}
                                </span>
                            </div>
                        </article>
                        <article>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-mauve-5 p-4 rounded">
                                    <p className="text-text-secondary font-bold text-xs mb-2">
                                        LANÇAMENTO
                                    </p>
                                    <span className="text-text-primary text-sm">
                                        {data?.release_date}
                                    </span>
                                </div>
                                <div className="bg-mauve-5 p-4 rounded">
                                    <p className="text-text-secondary font-bold text-xs mb-2">
                                        DURAÇÃO
                                    </p>
                                    <span className="text-text-primary text-sm">
                                        {data?.runtime}
                                    </span>
                                </div>
                                <div className="bg-mauve-5 p-4 rounded">
                                    <p className="text-text-secondary font-bold text-xs mb-2">
                                        SITUAÇÃO
                                    </p>
                                    <span className="text-text-primary text-sm">
                                        {data?.status}
                                    </span>
                                </div>
                                <div className="bg-mauve-5 p-4 rounded">
                                    <p className="text-text-secondary font-bold text-xs mb-2">
                                        IDIOMA
                                    </p>
                                    <span className="text-text-primary text-sm">
                                        {data?.original_language}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-4 mb-6">
                                <div className="bg-mauve-5 p-4 rounded grow">
                                    <p className="text-text-secondary font-bold text-xs mb-2">
                                        ORÇAMENTO
                                    </p>
                                    <span className="text-text-primary text-sm">
                                        {data?.budget}
                                    </span>
                                </div>
                                <div className="bg-mauve-5 p-4 rounded grow">
                                    <p className="text-text-secondary font-bold text-xs mb-2">
                                        RECEITA
                                    </p>
                                    <span className="text-text-primary text-sm">
                                        {data?.revenue}
                                    </span>
                                </div>
                                <div className="bg-mauve-5 p-4 rounded grow">
                                    <p className="text-text-secondary font-bold text-xs mb-2">
                                        LUCRO
                                    </p>
                                    <span className="text-text-primary text-sm">
                                        {data?.revenue}
                                    </span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div>{/* iframe */}</div>
            </div>
        </section>
    );
};
