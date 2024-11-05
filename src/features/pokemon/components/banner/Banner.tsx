"use client"

import React from "react"
import {
  FaWeight,
  FaVenusMars,
  FaTemperatureHigh,
  FaEgg,
  FaStar,
  FaMapMarkerAlt,
  FaLeaf,
  FaSkullCrossbones,
} from "react-icons/fa"
import {
  BannerContainer,
  InfoContainer,
  Name,
  TypeContainer,
  TypeBadge,
  DetailsBox,
  DetailItem,
  IconWrapper,
  PokemonWrapper,
  PokemonImage,
  ExtraDetails,
  ExtraDetailItem,
} from "./Banner.styles"

const Banner = () => {
  return (
    <BannerContainer>
      <InfoContainer>
        <Name>Bulbasaur</Name>
        <TypeContainer>
          <TypeBadge color="#78C850">
            <FaLeaf style={{ fontSize: "14px" }} />
            Grass
          </TypeBadge>
          <TypeBadge color="#A040A0">
            <FaSkullCrossbones style={{ fontSize: "14px" }} />
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
                fontSize: "14px",
                color: "#FFD700",
                marginBottom: "4px",
              }}
            />
            <span>64 XP</span>
          </ExtraDetailItem>
          <ExtraDetailItem>
            <FaMapMarkerAlt
              style={{
                fontSize: "14px",
                color: "#FFA07A",
                marginBottom: "4px",
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
