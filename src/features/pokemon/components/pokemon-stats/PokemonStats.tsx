import React, { useState } from 'react'
import Tabs from '@/components/tabs'
import {
  BarContainer,
  BarFill,
  StatLabel,
  StatRow,
  StatValue,
  StatsContainer,
  Title,
} from './PokemonStats.styles'

interface Stat {
  name: string
  base: number
  min: number
  max: number
}

interface PokemonStatsProps {
  stats?: Stat[]
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
