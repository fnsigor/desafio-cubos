import { useHomeModel } from "./home.model";

type HomeViewProps = ReturnType<typeof useHomeModel>;

export const HomeView = ({
    data,
    isError,
    isPending,
    error,
}: HomeViewProps) => {
    return (
        <div>
            <header></header>
            <nav>filter</nav>
            {isPending && <div>buscando dados</div>}
            {isError && <div>deu pau</div>}
            {data && (
                <>
                    <ul>
                        {data.results.map((movie) => (
                            <li key={movie.id}>{movie.title}</li>
                        ))}
                    </ul>
                    <p> total: {data.results.length}</p>
                </>
            )}
        </div>
    );
};
