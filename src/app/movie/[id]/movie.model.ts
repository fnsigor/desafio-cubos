'use client'

import { useQuery } from "@tanstack/react-query"
import { IGetMovieByIdService } from "@/service/Movies/GetMovieByIdService";
import { useRouter } from "next/navigation";


type MovieModelProps = {
  getMovieById: IGetMovieByIdService
  movieId: string,
}

export const useMovieModel = ({ getMovieById, movieId }: MovieModelProps) => {

  const router = useRouter();

  const handleBack = () => {
    router.back();
  };


  const { isPending, isError, data, error } = useQuery({
    queryKey: [`movie-id-${movieId}`],
    queryFn: () => getMovieById.execute(Number(movieId)),
    staleTime: 3600 * 24 //24h
  })


  return {
    isPending,
    isError,
    data,
    error,
    handleBack
  }

}