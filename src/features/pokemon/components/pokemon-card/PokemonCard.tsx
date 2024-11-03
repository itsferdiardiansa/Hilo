import { getPokemonBgColor, getPokemonColor } from '@/utils/getPokemonColors'
import Badge from '@/components/ui/badge'
import type { Pokemon } from '@/features/pokemon/api/pokemonApi'
import { PokemonType } from '@/constants/typeColors'
import {
  StyledPokemonCard,
  PokemonCardInfo,
  PokemonName,
  PokemonImageContainer,
  PokemonImage,
} from './PokemonCard.styles'

const PokemonCard = ({
  types,
  name,
  image,
}: Pokemon & { shapeColor?: string }) => {
  return (
    <StyledPokemonCard $bgColor={getPokemonBgColor(types[0])}>
      <PokemonCardInfo>
        <PokemonName>{name}</PokemonName>

        {types.map((type, key) => (
          <Badge type={type as PokemonType} />
        ))}
      </PokemonCardInfo>
      <PokemonImageContainer $shapeColor={getPokemonColor(types[0])}>
        <PokemonImage src={image} alt={name} />
      </PokemonImageContainer>
    </StyledPokemonCard>
  )
}

export default PokemonCard
