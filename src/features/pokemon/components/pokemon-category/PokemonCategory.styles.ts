import styled from "styled-components"

export const Card = styled.div<{ $bgColor: string }>`
  position: relative;
  padding: 16px;
  border-radius: 8px;
  color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  background-color: ${(props) => props.$bgColor || "#333333"};
  overflow: hidden;
  min-width: 200px;
  flex: 1 1 250px;

  &:hover {
    transform: translateY(-5px);
  }
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 1;
`

export const PokemonImageContainer = styled.div<{ $shapeColor: string }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 30%;
  height: 60%;
  border-bottom-left-radius: 50%;
  background-color: ${(props) => props.$shapeColor || "#444444"};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PokemonImage = styled.img`
  width: 100%;
  height: auto;
`

export const PokemonName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: #ffffff;
`

export const TypeBadge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
  background-color: ${(props) => props.color || "#666666"};
  margin-top: 4px;
  width: fit-content;
`

export const CardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 12px;
    padding: 10px 0;
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`
