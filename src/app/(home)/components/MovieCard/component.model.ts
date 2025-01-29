import { IGetGenresService } from "@/service/Genres/GetGenresService"
import { useQuery } from "@tanstack/react-query"

type ComponentProps = {
  getGenres: IGetGenresService
}


export const useMovieCardModel = ({ getGenres }: ComponentProps) => {
  const {
    isPending: isPendingGenres,
    isError: isErrorGenres,
    data: dataGenres
  } = useQuery({
    queryKey: ['genres'],
    queryFn: () => getGenres.execute(),
    staleTime: 3600 * (24 * 7)
  })


  return {
    isPendingGenres,
    isErrorGenres,
    dataGenres
  }
}