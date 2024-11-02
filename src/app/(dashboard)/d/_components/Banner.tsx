'use client'

import React, { useState } from 'react'
import styled from 'styled-components'
import {
  FaWeight,
  FaVenusMars,
  FaTemperatureHigh,
  FaEgg,
  FaStar,
  FaMapMarkerAlt,
  FaLeaf,
  FaSkullCrossbones,
  FaVolumeUp,
} from 'react-icons/fa'

const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  background: linear-gradient(135deg, #3b4cca, #8b9dc3);
  padding: 30px;
  border-radius: 12px;
  color: #ffffff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: skewX(-20deg);
    animation: sheenAnimation 5s ease-in-out infinite;
  }

  @keyframes sheenAnimation {
    0% {
      transform: translateX(-100%) skewX(-20deg);
    }
    100% {
      transform: translateX(100%) skewX(-20deg);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
  }
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 1;
  flex: 1;
  max-width: 50%; /* Keeps the InfoContainer at half width on desktop */

  @media (max-width: 768px) {
    max-width: 100%;
    align-items: center;
  }
`

const Name = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`

const TypeContainer = styled.div`
  display: flex;
  gap: 8px;
`

const TypeBadge = styled.span<{ color: string }>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 16px;
  font-size: 12px;
  color: #ffffff;
  background-color: ${(props) => props.color || '#666'};

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 3px 8px;
  }
`

const PokemonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 250px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

const PokemonImage = styled.img`
  width: 250px;
  height: 250px;
  z-index: 1;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`

const DetailsBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6px;
  max-width: 450px;
  backdrop-filter: blur(5px);
  z-index: 1;
  margin-top: 20px;
  position: absolute;
  bottom: 25px;

  @media (max-width: 768px) {
    position: relative;
    bottom: 0;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  font-size: 13px;
  padding: 8px 16px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 6px 12px;
  }
`

const IconWrapper = styled.div`
  font-size: 18px;
  margin-bottom: 2px;
  color: #fff;
`

const ExtraDetails = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  font-size: 12px;
  color: #e0e0e0;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`

const ExtraDetailItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  font-size: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 5px;
  width: 60px;
`

const SoundIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 215, 0, 0.15);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s;

  &:hover {
    background-color: rgba(255, 215, 0, 0.3);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`

const SoundIcon = styled(FaVolumeUp)`
  font-size: 18px;
  color: #ffd700;
`

const Banner: React.FC = () => {
  const [audio] = useState(
    new Audio('https://example.com/path/to/pokemon-sound.mp3'),
  ) // Replace with actual audio URL

  const playSound = () => {
    audio.play().catch((error) => {
      console.error('Audio play failed:', error)
    })
  }

  return (
    <BannerContainer>
      <InfoContainer>
        <Name>Bulbasaur</Name>
        <TypeContainer>
          <TypeBadge color="#78C850">
            <FaLeaf style={{ fontSize: '14px' }} />
            Grass
          </TypeBadge>
          <TypeBadge color="#A040A0">
            <FaSkullCrossbones style={{ fontSize: '14px' }} />
            Poison
          </TypeBadge>
        </TypeContainer>

        <DetailsBox>
          <DetailItem>
            <IconWrapper>
              <FaWeight />
            </IconWrapper>
            <span>6.9 kg</span>
          </DetailItem>
          <DetailItem>
            <IconWrapper>
              <FaVenusMars />
            </IconWrapper>
            <span>7 : 1</span>
          </DetailItem>
          <DetailItem>
            <IconWrapper>
              <FaEgg />
            </IconWrapper>
            <span>20 Cycles</span>
          </DetailItem>
          <DetailItem>
            <IconWrapper>
              <FaTemperatureHigh />
            </IconWrapper>
            <span>0.7 m</span>
          </DetailItem>
        </DetailsBox>

        <SoundIconContainer onClick={playSound}>
          <SoundIcon />
        </SoundIconContainer>
      </InfoContainer>

      <PokemonWrapper>
        <PokemonImage
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="Bulbasaur"
        />
        <ExtraDetails>
          <ExtraDetailItem>
            <FaStar
              style={{
                fontSize: '14px',
                color: '#FFD700',
                marginBottom: '4px',
              }}
            />
            <span>64 XP</span>
          </ExtraDetailItem>
          <ExtraDetailItem>
            <FaMapMarkerAlt
              style={{
                fontSize: '14px',
                color: '#FFA07A',
                marginBottom: '4px',
              }}
            />
            <span>Forest</span>
          </ExtraDetailItem>
        </ExtraDetails>
      </PokemonWrapper>
    </BannerContainer>
  )
}

export default Banner
