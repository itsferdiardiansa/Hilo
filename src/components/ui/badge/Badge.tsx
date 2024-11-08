import { StyledBadge } from "./Badge.styles"
import type { PokemonType } from "@/constants/typeColors"

interface BadgeProps {
  type: PokemonType
}

const Badge: React.FC<BadgeProps> = ({ type }) => {
  return <StyledBadge type={type}>{type}</StyledBadge>
}

export default Badge
