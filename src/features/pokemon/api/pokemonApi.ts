import axiosInstance from "@/libs/axiosInstance"
import { getPokemonImageUrl } from "@/utils/getPokemonImageUrl"

export interface Pokemon {
  id: number
  name: string
  image: string
  types: string[]
  abilities: string[]
}

export const fetchPokemonDetails = async (url: string): Promise<Pokemon> => {
  const pokemonDetail = await axiosInstance.get(url)
  const id = pokemonDetail.data.id
  const imageUrl = getPokemonImageUrl(id)

  return {
    id,
    name: pokemonDetail.data.name,
    image: imageUrl,
    types: pokemonDetail.data.types.map(
      (typeInfo: { type: { name: string } }) => typeInfo.type.name,
    ),
    abilities: pokemonDetail.data.abilities.map(
      (abilityInfo: { ability: { name: string } }) => abilityInfo.ability.name,
    ),
  }
}

const fetchPokemonByType = async (
  type: string,
  offset: number,
  limit: number,
): Promise<Pokemon[]> => {
  const typeResponse = await axiosInstance.get(`/type/${type}`)
  const pokemonEntries = typeResponse.data.pokemon.slice(offset, offset + limit)

  return Promise.all(
    pokemonEntries.map((entry: { pokemon: { url: string } }) =>
      fetchPokemonDetails(entry.pokemon.url),
    ),
  )
}

export const fetchPokemonList = async (
  page: number,
  limit: number,
  filters: { type: string | null; name: string | null },
) => {
  const offset = (page - 1) * limit

  if (filters.name) {
    try {
      const pokemonData = await fetchPokemonDetails(
        `/pokemon/${filters.name.toLowerCase()}`,
      )
      return {
        data: [pokemonData],
        page: 1,
      }
      /* eslint-disable @typescript-eslint/no-unused-vars */
    } catch (error) {
      return {
        data: [],
        page: 1,
      }
    }
  }

  if (filters.type) {
    const pokemonData = await fetchPokemonByType(filters.type, offset, limit)
    return {
      data: pokemonData,
      page,
    }
  }

  const response = await axiosInstance.get(
    `/pokemon?offset=${offset}&limit=${limit}`,
  )
  const pokemonData = await Promise.all(
    response.data.results.map((pokemon: { url: string }) =>
      fetchPokemonDetails(pokemon.url),
    ),
  )

  return {
    data: pokemonData,
    page,
  }
}
