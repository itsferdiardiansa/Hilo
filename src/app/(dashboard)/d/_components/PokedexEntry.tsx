import React from 'react'
import styled from 'styled-components'
import {
  FaMapMarkerAlt,
  FaWeightHanging,
  FaRulerVertical,
  FaStar,
} from 'react-icons/fa'

// Styled Components
const EntryContainer = styled.div`
  background-color: #2d2d2d;
  color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`

const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 16px;
  border-bottom: 1px solid #444;
  padding-bottom: 8px;
`

const EntryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Description = styled.p`
  font-size: 14px;
  color: #ffffff;
  line-height: 1.5;
`

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #ffffff;
`

const IconContainer = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`

const SubTitle = styled.span`
  font-weight: bold;
  color: #ffffff;
`

const PokedexEntry = ({ entry }) => {
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
