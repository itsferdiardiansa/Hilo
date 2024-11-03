export const formatPokemonId = (id: number): string => {
  return id.toString().padStart(3, '0')
}

export const getPokemonImageUrl = (id: number): string => {
  const formattedId = formatPokemonId(id)
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formattedId}.png`
}
