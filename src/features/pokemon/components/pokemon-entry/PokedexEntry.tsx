import React from 'react'
import {
  FaMapMarkerAlt,
  FaWeightHanging,
  FaRulerVertical,
  FaStar,
} from 'react-icons/fa'
import {
  EntryContainer,
  Title,
  Description,
  EntryContent,
  IconContainer,
  InfoRow,
  SubTitle,
} from './PokemonEntry.styles'

type Entry = {
  description: string
  habitat: string
  height: number
  weight: number
  shiny: boolean
}

interface PokedexEntryProps {
  entry: Entry
}

const PokedexEntry = ({ entry }: PokedexEntryProps) => {
  return (
    <EntryContainer>
      <Title>Pokédex Entry</Title>
      <EntryContent>
        <Description>{entry.description}</Description>
        <InfoRow>
          <IconContainer>
            <FaMapMarkerAlt />
          </IconContainer>
          <SubTitle>Habitat:</SubTitle> {entry.habitat}
        </InfoRow>
        <InfoRow>
          <IconContainer>
            <FaRulerVertical />
          </IconContainer>
          <SubTitle>Height:</SubTitle> {entry.height} m
        </InfoRow>
        <InfoRow>
          <IconContainer>
            <FaWeightHanging />
          </IconContainer>
          <SubTitle>Weight:</SubTitle> {entry.weight} kg
        </InfoRow>
        <InfoRow>
          <IconContainer>
            <FaStar />
          </IconContainer>
          <SubTitle>Shiny:</SubTitle>{' '}
          {entry.shiny ? 'Available' : 'Not Available'}
        </InfoRow>
      </EntryContent>
    </EntryContainer>
  )
}

export default PokedexEntry
