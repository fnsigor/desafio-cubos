'use client'

import { useQuery } from "@tanstack/react-query"
import { IGetMoviesService } from "../../service/Movies/GetMoviesService"
import { useState } from "react"


type HomeModelProps = {
  getMovies: IGetMoviesService
}

export const useHomeModel = ({ getMovies }: HomeModelProps) => {


  const [filter, setFilter] = useState({
    page: 1
  })


  const { isPending, isError, data, error } = useQuery({
    queryKey: ['home', filter.page],
    queryFn: () => getMovies.execute(),
    staleTime: 3600 * 24 //24h
  })


  return {
    isPending,
    isError,
    data,
    error,
    filter, 
    setFilter
  }

}