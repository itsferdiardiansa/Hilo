import React from 'react'
import styled from 'styled-components'
import { FaEgg, FaClock } from 'react-icons/fa'

// Styled Components
const EggGroupContainer = styled.div`
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

const EggGroupList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;
`

const EggGroupItem = styled.div`
  background-color: #444;
  color: #ffffff;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #ffffff;
  margin-top: 12px;
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

const EggGroup = ({ eggGroups = [], hatchTime = 'N/A' }) => {
  return (
    <EggGroupContainer>
      <Title>Egg Group & Breeding Info</Title>
      <div>
        <SubTitle>Egg Groups:</SubTitle>
        <EggGroupList>
          {eggGroups.map((group, index) => (
            <EggGroupItem key={index}>
              <IconContainer>
                <FaEgg />
              </IconContainer>
              {group}
            </EggGroupItem>
          ))}
        </EggGroupList>
      </div>
      <InfoRow>
        <IconContainer>
          <FaClock />
        </IconContainer>
        <SubTitle>Hatch Time:</SubTitle> {hatchTime} cycles
      </InfoRow>
    </EggGroupContainer>
  )
}

export default EggGroup
