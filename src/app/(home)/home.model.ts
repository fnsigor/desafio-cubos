'use client'

import { useQuery } from "@tanstack/react-query"
import { IGetMoviesService } from "../../service/Movies/GetMoviesService"
import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from 'next/navigation';


type HomeModelProps = {
  getMovies: IGetMoviesService
}

export const useHomeModel = ({ getMovies }: HomeModelProps) => {

  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get('page')) || 1;



  const { isPending, isError, data, error } = useQuery({
    queryKey: ['home', page],
    queryFn: () => getMovies.execute({page}),
    staleTime: 3600 * 24 //24h
  })


  useEffect(() => {
    console.log('data', data)
  }, [data])

  return {
    isPending,
    isError,
    data,
    error,
  }

}