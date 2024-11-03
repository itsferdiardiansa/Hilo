import styled from 'styled-components'
import { typeColors, PokemonType } from '@/constants/typeColors'

interface StyledProps {
  type: PokemonType
}

export const StyledBadge = styled.span<StyledProps>`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
  background-color: ${({ type }) => typeColors[type]};
  width: fit-content;
`
