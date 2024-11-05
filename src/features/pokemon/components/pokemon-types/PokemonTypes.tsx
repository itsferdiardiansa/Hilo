import React from "react"
import {
  FaFire,
  FaWater,
  FaLeaf,
  FaBolt,
  FaSnowflake,
  FaBug,
  FaDragon,
  FaGhost,
} from "react-icons/fa"
import {
  Badge,
  BadgeIcon,
  BadgeRow,
  DamageGroup,
  GroupTitle,
  Title,
  TypeHeader,
  TypesContainer,
} from "./PokemonTypes.styles"

const typeIcons: { [key: string]: JSX.Element } = {
  fire: <FaFire />,
  water: <FaWater />,
  grass: <FaLeaf />,
  electric: <FaBolt />,
  ice: <FaSnowflake />,
  bug: <FaBug />,
  dragon: <FaDragon />,
  ghost: <FaGhost />,
}

interface Effectiveness {
  type: string
  multiplier: number
}

interface PokemonType {
  name: string
  color: string
  double_damage_to: Effectiveness[]
  half_damage_to: Effectiveness[]
  no_damage_to: Effectiveness[]
  quarter_damage_to: Effectiveness[]
  one_damage_to: Effectiveness[]
}

interface PokemonTypesProps {
  types: PokemonType[]
}

const PokemonTypes: React.FC<PokemonTypesProps> = ({ types }) => {
  return (
    <TypesContainer>
      <Title>Pokémon Types</Title>

      <TypeHeader>
        {types.map((type) => (
          <Badge key={type.name} color={type.color}>
            <BadgeIcon>{typeIcons[type.name.toLowerCase()]}</BadgeIcon>
            {type.name}
          </Badge>
        ))}
      </TypeHeader>

      <DamageGroup>
        <GroupTitle>2x Damage</GroupTitle>
        <BadgeRow>
          {types.map((type) =>
            type.double_damage_to.map((effect) => (
              <Badge key={effect.type} color={type.color}>
                <BadgeIcon>{typeIcons[effect.type.toLowerCase()]}</BadgeIcon>
                {effect.type}
              </Badge>
            )),
          )}
        </BadgeRow>
      </DamageGroup>

      <DamageGroup>
        <GroupTitle>1x Damage</GroupTitle>
        <BadgeRow>
          {types.map((type) =>
            type.one_damage_to.map((effect) => (
              <Badge key={effect.type} color={type.color}>
                <BadgeIcon>{typeIcons[effect.type.toLowerCase()]}</BadgeIcon>
                {effect.type}
              </Badge>
            )),
          )}
        </BadgeRow>
      </DamageGroup>

      <DamageGroup>
        <GroupTitle>1/4x Damage</GroupTitle>
        <BadgeRow>
          {types.map((type) =>
            type.quarter_damage_to.map((effect) => (
              <Badge key={effect.type} color={type.color}>
                <BadgeIcon>{typeIcons[effect.type.toLowerCase()]}</BadgeIcon>
                {effect.type}
              </Badge>
            )),
          )}
        </BadgeRow>
      </DamageGroup>

      <DamageGroup>
        <GroupTitle>1/2x Damage</GroupTitle>
        <BadgeRow>
          {types.map((type) =>
            type.half_damage_to.map((effect) => (
              <Badge key={effect.type} color={type.color}>
                <BadgeIcon>{typeIcons[effect.type.toLowerCase()]}</BadgeIcon>
                {effect.type}
              </Badge>
            )),
          )}
        </BadgeRow>
      </DamageGroup>
    </TypesContainer>
  )
}

export default PokemonTypes
