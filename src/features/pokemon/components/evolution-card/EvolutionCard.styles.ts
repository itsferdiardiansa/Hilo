import styled from "styled-components"
import { FaArrowRight, FaArrowDown } from "react-icons/fa"

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #252525;
  border-radius: 16px;
  padding: 30px;
  width: 100%;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  color: #fff;
`

export const Title = styled.h2`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`

export const EvolutionChain = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const PokemonContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #333;
  border-radius: 12px;
  padding: 15px;
  min-width: 280px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    min-width: 220px;
    padding: 10px;
  }
`

export const ImageWrapper = styled.div`
  background: radial-gradient(circle at center, #444, transparent 70%);
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;

  @media (max-width: 480px) {
    padding: 8px;
    margin-right: 10px;
  }
`

export const PokemonImage = styled.img`
  width: 70px;
  height: 70px;

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`

export const PokemonName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: #ffffff;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

export const EvolutionLevel = styled.p`
  font-size: 14px;
  color: #b0c4de;
  margin: 4px 0;
  font-style: italic;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`

export const GenderIcon = styled.div`
  font-size: 16px;
  color: #ffd700;
  margin-top: 4px;
`

export const TypeBadge = styled.span`
  background-color: ${({ color }) => color || "#666"};
  color: #ffffff;
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 8px;
  margin-top: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  align-self: flex-start;

  @media (max-width: 480px) {
    font-size: 9px;
    padding: 3px 6px;
  }
`

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  padding: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    padding: 3px;
  }
`

export const ArrowIconRight = styled(FaArrowRight)`
  color: #252525;
  font-size: 16px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ArrowIconDown = styled(FaArrowDown)`
  color: #252525;
  font-size: 16px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`
