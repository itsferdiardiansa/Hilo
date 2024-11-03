import { FaBolt, FaEyeSlash } from 'react-icons/fa'
import {
  AbilitiesContainer,
  AbilityDescription,
  AbilityList,
  AbilityItem,
  AbilityHeader,
  Title,
  IconContainer,
  AbilityName,
  HiddenAbilityBadge,
} from './Abilities.styles'

type Ability = {
  name: string
  description: string
  is_hidden: boolean
}

interface AbilitiesProps {
  abilities: Ability[]
}

const Abilities = ({ abilities }: AbilitiesProps) => {
  return (
    <AbilitiesContainer>
      <Title>Abilities</Title>
      <AbilityList>
        {abilities.map((ability, index) => (
          <AbilityItem key={index}>
            <AbilityHeader>
              <IconContainer>
                {ability.is_hidden ? <FaEyeSlash /> : <FaBolt />}
              </IconContainer>
              <AbilityName>{ability.name}</AbilityName>
              {ability.is_hidden && (
                <HiddenAbilityBadge>
                  <FaEyeSlash /> Hidden Ability
                </HiddenAbilityBadge>
              )}
            </AbilityHeader>
            <AbilityDescription>{ability.description}</AbilityDescription>
          </AbilityItem>
        ))}
      </AbilityList>
    </AbilitiesContainer>
  )
}

export default Abilities
