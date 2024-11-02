import React from 'react'
import styled from 'styled-components'
import {
  FaFire,
  FaWater,
  FaLeaf,
  FaBolt,
  FaSnowflake,
  FaBug,
  FaDragon,
  FaGhost,
} from 'react-icons/fa'

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

const TypesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #252525;
  border-radius: 16px;
  padding: 24px;
  width: 100%;
  color: #fff;
`

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 16px;
  text-align: left;
`

const TypeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`

const Badge = styled.div<{ color?: string }>`
  background-color: ${({ color }) => color || '#444'};
  color: #fff;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-transform: capitalize;
`

const BadgeIcon = styled.span`
  font-size: 14px;
`

const DamageGroup = styled.div`
  margin-bottom: 16px;
  border-top: 1px solid #444;
  padding-top: 16px;
`

const GroupTitle = styled.h3`
  font-size: 14px;
  font-weight: normal;
  color: #ffffff;
  margin-bottom: 8px;
  text-align: left;
`

const BadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`

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
