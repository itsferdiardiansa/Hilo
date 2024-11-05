import styled from "styled-components"
import { mediaQuery } from "@/styles/mixins/media"

export const StyledPokemonCard = styled.div<{ $bgColor?: string }>`
  position: relative;
  border-radius: 8px;
  color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  background-color: ${(props) => props.$bgColor || "#333333"};
  overflow: hidden;
  display: flex;

  &:hover {
    transform: translateY(-5px);
  }
`

export const PokemonCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  padding: 12px;
`

export const PokemonImageContainer = styled.div<{ $shapeColor?: string }>`
  width: 130px;
  height: 130px;
  background-color: ${(props) => props.$shapeColor || "#444444"};
  border-bottom-left-radius: 60px;
  border-top-left-radius: 60px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;

  ${mediaQuery("tablet")`
    width: 100px;
    height: 100px;
  `}
`

export const PokemonImage = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;

  ${mediaQuery("tablet")`
    width: 90px;
    height: 90px;
  `}
`

export const PokemonName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`
