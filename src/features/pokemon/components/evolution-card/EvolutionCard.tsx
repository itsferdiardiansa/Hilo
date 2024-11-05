import React from "react"
import { FaMars, FaVenus } from "react-icons/fa"
import {
  CardContainer,
  Title,
  EvolutionChain,
  PokemonContainer,
  ImageWrapper,
  PokemonImage,
  DetailsWrapper,
  PokemonName,
  EvolutionLevel,
  GenderIcon,
  TypeBadge,
  ArrowContainer,
  ArrowIconDown,
  ArrowIconRight,
} from "./EvolutionCard.styles"

const genderIcons = {
  male: <FaMars />,
  female: <FaVenus />,
}

interface Pokemon {
  name: string
  gifUrl: string
  evolutionLevel: string
  type: string
  typeColor: string
  gender?: "male" | "female"
}

interface EvolutionCardProps {
  evolutionChain: Pokemon[]
}

const EvolutionCard: React.FC<EvolutionCardProps> = ({ evolutionChain }) => {
  return (
    <CardContainer>
      <Title>Evolution Chain</Title>
      <EvolutionChain>
        {evolutionChain.map((pokemon, index) => (
          <React.Fragment key={index}>
            <PokemonContainer>
              <ImageWrapper>
                <PokemonImage src={pokemon.gifUrl} alt={pokemon.name} />
              </ImageWrapper>
              <DetailsWrapper>
                <PokemonName>{pokemon.name}</PokemonName>
                <EvolutionLevel>Level {pokemon.evolutionLevel}</EvolutionLevel>
                {pokemon.gender && (
                  <GenderIcon>{genderIcons[pokemon.gender]}</GenderIcon>
                )}
                <TypeBadge color={pokemon.typeColor}>{pokemon.type}</TypeBadge>
              </DetailsWrapper>
            </PokemonContainer>
            {index < evolutionChain.length - 1 && (
              <ArrowContainer>
                <ArrowIconRight />
                <ArrowIconDown />
              </ArrowContainer>
            )}
          </React.Fragment>
        ))}
      </EvolutionChain>
    </CardContainer>
  )
}

export default EvolutionCard
