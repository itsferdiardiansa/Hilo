import React, { useState } from 'react'
import styled from 'styled-components'
import Tabs from './Tabs'

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #252525;
  border-radius: 16px;
  padding: 20px;
  width: 100%;
  color: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`

const StatRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StatLabel = styled.div`
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
  width: 100px;
`

const StatValue = styled.div`
  font-size: 14px;
  color: #b0c4de;
  width: 60px;
  text-align: right;
  white-space: nowrap;
  margin-left: 10px;
`

const BarContainer = styled.div`
  flex: 1;
  height: 10px;
  background-color: #333;
  border-radius: 5px;
  overflow: hidden;
  margin-left: 10px;
  display: flex;
  position: relative;
`

const BarFill = styled.div<{
  value: number
  color: string
  position: 'min' | 'max'
}>`
  position: absolute;
  height: 100%;
  width: ${({ value }) => value}%;
  background-color: ${({ color }) => color};
  border-radius: ${({ position }) =>
    position === 'min' ? '5px 0 0 5px' : '0 5px 5px 0'};
  transition: width 0.5s ease;
`

// Data Types
interface Stat {
  name: string
  base: number
  min: number
  max: number
}

interface PokemonStatsProps {
  stats?: Stat[] // Make stats optional
}

const PokemonStats: React.FC<PokemonStatsProps> = ({ stats = [] }) => {
  const [activeTab, setActiveTab] = useState<'base' | 'min-max'>('base')

  const tabItems = [
    { label: 'Base Stats', value: 'base' },
    { label: 'Min-Max Stats', value: 'min-max' },
  ]

  return (
    <StatsContainer>
      <Title>Pokémon Stats</Title>
      <Tabs
        activeTab={activeTab}
        onTabClick={(key: string) => setActiveTab(key as 'base' | 'min-max')}
        tabs={tabItems}
      />
      {activeTab === 'base'
        ? stats.map((stat, index) => (
            <StatRow key={index}>
              <StatLabel>{stat.name}</StatLabel>
              <BarContainer>
                <BarFill
                  value={(stat.base / 255) * 100}
                  color="#FFD700"
                  position="max"
                />
              </BarContainer>
              <StatValue>{stat.base}</StatValue>
            </StatRow>
          ))
        : stats.map((stat, index) => (
            <StatRow key={index}>
              <StatLabel>{stat.name}</StatLabel>
              <BarContainer>
                <BarFill
                  value={(stat.min / 255) * 100}
                  color="#FFD700"
                  position="min"
                />
                <BarFill
                  value={(stat.max / 255) * 100}
                  color="#DAA520"
                  position="max"
                />
              </BarContainer>
              <StatValue>
                {stat.min} - {stat.max}
              </StatValue>
            </StatRow>
          ))}
    </StatsContainer>
  )
}

export default PokemonStats
