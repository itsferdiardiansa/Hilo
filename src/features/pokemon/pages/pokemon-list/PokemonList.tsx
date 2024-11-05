import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import type { Pokemon } from '@/features/pokemon/api/pokemonApi'
import { usePokemonList } from '@/features/pokemon/hooks/usePokemonList'

import InfiniteScrollLoader from '@/components/infinity-scroll'
import SearchForm from '@/features/pokemon/components/search-form'
import PokemonCard from '@/features/pokemon/components/pokemon-card'
import NotFound from '@/features/pokemon/components/pokemon-not-found'
import { CenteredContainer } from '@/features/pokemon/components/pokemon-not-found/PokemonNotFound.styles'

import { StyledPokemonList } from './PokemonList.styles'
import Loader from '@/components/infinity-scroll/Loader'

const PokemonList = () => {
  const router = useRouter()

  const initialFilters = {
    type: router.query.type ? String(router.query.type) : null,
    name: router.query.name ? String(router.query.name) : null,
  }

  const [filters, setFilters] = useState(initialFilters)

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    usePokemonList(filters)

  const handleSearch = (newFilters: {
    type: string | null
    name: string | null
  }) => {
    setFilters(newFilters)

    router.push(
      {
        pathname: '/',
        query: {
          ...(newFilters.name ? { name: newFilters.name } : {}),
          ...(newFilters.type ? { type: newFilters.type } : {}),
        },
      },
      undefined,
      { shallow: true },
    )
  }

  useEffect(() => {
    if (JSON.stringify(filters) === JSON.stringify(initialFilters)) return
    setFilters(initialFilters)
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [router.query, initialFilters])

  return (
    <>
      <SearchForm onSearch={handleSearch} initialFilters={filters} />

      {isLoading ? (
        <CenteredContainer>
          <Loader />
        </CenteredContainer>
      ) : data?.pages?.[0]?.data?.length === 0 ? (
        <NotFound />
      ) : (
        <InfiniteScrollLoader
          hasMore={!!hasNextPage}
          isLoading={isFetchingNextPage}
          loadMore={fetchNextPage}
        >
          <StyledPokemonList>
            {data?.pages.map((page) =>
              page.data.map((pokemon: Pokemon, index: number) => (
                <Link
                  key={`${pokemon.id}-${index}`}
                  href={`/@${pokemon.name}`}
                  passHref
                >
                  <PokemonCard {...pokemon} />
                </Link>
              )),
            )}
          </StyledPokemonList>
        </InfiniteScrollLoader>
      )}
    </>
  )
}

export default PokemonList
