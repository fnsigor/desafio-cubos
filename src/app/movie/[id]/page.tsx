"use client";

import { HttpClient } from "@/infra/http/HttpClient";
import { GetMovieByIdService } from "@/service/Movies/GetMovieByIdService";
import { useMovieModel } from "./movie.model";
import { MovieView } from "./movie.view";

export default function Movie({ params }: { params: { id: string } }) {
    const httpClient = HttpClient.create();

    const service = new GetMovieByIdService(httpClient);

    const methods = useMovieModel({
        getMovieById: service,
        movieId: params.id
    });

    return (
        <main className="grow">
            <MovieView {...methods} />
        </main>
    );
}
