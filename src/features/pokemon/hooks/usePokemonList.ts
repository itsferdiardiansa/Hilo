import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchPokemonList } from '../api/pokemonApi'

const POKEMON_LIMIT = 20

interface Filters {
  type: string | null
  name: string | null
}

export const usePokemonList = (filters: Filters) => {
  return useInfiniteQuery({
    queryKey: ['pokemonList', filters],
    queryFn: ({ pageParam = 1 }) =>
      fetchPokemonList(pageParam, POKEMON_LIMIT, filters),
    getNextPageParam: (lastPage) => {
      return lastPage.data.length === POKEMON_LIMIT
        ? lastPage.page + 1
        : undefined
    },
    initialPageParam: 1,
    staleTime: 1000 * 60 * 5,
  })
}
