import styled from 'styled-components'

export const BannerContainer = styled.div`
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

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 1;
  flex: 1;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
    align-items: center;
  }
`

export const Name = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`

export const TypeContainer = styled.div`
  display: flex;
  gap: 8px;
`

export const TypeBadge = styled.span<{ color: string }>`
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

export const PokemonWrapper = styled.div`
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

export const PokemonImage = styled.img`
  width: 250px;
  height: 250px;
  z-index: 1;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`

export const DetailsBox = styled.div`
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

export const DetailItem = styled.div`
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

export const IconWrapper = styled.div`
  font-size: 18px;
  margin-bottom: 2px;
  color: #fff;
`

export const ExtraDetails = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  font-size: 12px;
  color: #e0e0e0;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`

export const ExtraDetailItem = styled.div`
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
