"use client";

import { HttpClient } from "../infra/http/HttpClient";
import { GetMoviesService } from "../service/Movies/GetMoviesService";
import { useHomeModel } from "./home.model";
import { HomeView } from "./home.view";

export default function Home() {
    const httpClient = HttpClient.create();

    const service = new GetMoviesService(httpClient);

    const methods = useHomeModel({
        getMovies: service,
    });

    return (
        <main>
            <HomeView {...methods} />
        </main>
    );
}
