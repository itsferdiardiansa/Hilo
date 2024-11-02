import React from 'react'
import styled from 'styled-components'
import { FaBolt, FaEyeSlash } from 'react-icons/fa'

// Styled Components
const AbilitiesContainer = styled.div`
  background-color: #2d2d2d;
  color: #fff;
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`

const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff; /* Warna putih untuk judul */
  margin-bottom: 16px;
  border-bottom: 1px solid #444;
  padding-bottom: 8px;
`

const AbilityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const AbilityItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  position: relative;
`

const AbilityHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const AbilityName = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff; /* Warna putih untuk nama ability */
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  font-size: 16px;
  color: #ffffff; /* Warna putih untuk ikon */
`

const AbilityDescription = styled.p`
  font-size: 14px;
  color: #ffffff; /* Warna putih untuk deskripsi */
  margin-top: 4px;
  line-height: 1.5;
`

const HiddenAbilityBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: bold;
  color: #ffffff; /* Warna putih untuk teks badge */
`

const Abilities = ({ abilities }) => {
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
