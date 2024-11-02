'use client'

import React from 'react'
import styled from 'styled-components'

import Banner from './_components/Banner'
import Moves from './_components/Moves'
import EvolutionCard from './_components/EvolutionCard'
import PokemonStats from './_components/PokemonStats'
import PokemonTypes from './_components/PokemonTypes'
import Abilities from './_components/Abilities'
import PokedexEntry from './_components/PokedexEntry'
import EggGroup from './_components/EggGroup'
import PokemonCategory from './_components/PokemonCategory'

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

// Kolom Kiri
const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

// Kolom Kanan
const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const movesData = [
  {
    level: 'Lv 1',
    name: 'Tackle',
    type: 'Normal',
    icon: '💥',
    power: '40',
    accuracy: '100',
    pp: '35',
  },
  {
    level: 'Lv 3',
    name: 'Growl',
    type: 'Normal',
    icon: '💬',
    power: '',
    accuracy: '100',
    pp: '40',
  },
  {
    level: 'Lv 7',
    name: 'Leech Seed',
    type: 'Grass',
    icon: '💬',
    power: '',
    accuracy: '90',
    pp: '10',
  },
  {
    level: 'Lv 9',
    name: 'Vine Whip',
    type: 'Grass',
    icon: '💥',
    power: '45',
    accuracy: '100',
    pp: '25',
  },
  {
    level: 'Lv 9',
    name: 'Vine Whip',
    type: 'Grass',
    icon: '💥',
    power: '45',
    accuracy: '100',
    pp: '25',
  },
  {
    level: 'Lv 9',
    name: 'Vine Whip',
    type: 'Grass',
    icon: '💥',
    power: '45',
    accuracy: '100',
    pp: '25',
  },
  {
    level: 'Lv 9',
    name: 'Vine Whip',
    type: 'Grass',
    icon: '💥',
    power: '45',
    accuracy: '100',
    pp: '25',
  },
  {
    level: 'Lv 9',
    name: 'Vine Whip',
    type: 'Grass',
    icon: '💥',
    power: '45',
    accuracy: '100',
    pp: '25',
  },
  {
    level: 'Lv 9',
    name: 'Vine Whip',
    type: 'Grass',
    icon: '💥',
    power: '45',
    accuracy: '100',
    pp: '25',
  },
]

const evolutionData = [
  {
    name: 'Bulbasaur',
    gifUrl: 'https://play.pokemonshowdown.com/sprites/xyani/bulbasaur.gif',
    evolutionLevel: '1',
    type: 'Grass',
    typeColor: '#78C850',
    gender: 'male',
  },
  {
    name: 'Ivysaur',
    gifUrl: 'https://play.pokemonshowdown.com/sprites/xyani/ivysaur.gif',
    evolutionLevel: '16',
    type: 'Grass',
    typeColor: '#78C850',
    gender: 'male',
  },
  {
    name: 'Venusaur',
    gifUrl: 'https://play.pokemonshowdown.com/sprites/xyani/venusaur.gif',
    evolutionLevel: '32',
    type: 'Grass',
    typeColor: '#78C850',
    gender: 'female',
  },
]

const statsData = [
  { name: 'HP', base: 45, min: 200, max: 294 },
  { name: 'Attack', base: 49, min: 92, max: 216 },
  { name: 'Speed', base: 45, min: 85, max: 207 },
  { name: 'Defense', base: 49, min: 92, max: 216 },
  { name: 'Attack', base: 65, min: 121, max: 251 },
  { name: 'Defense', base: 65, min: 121, max: 251 },
]

const typesData = [
  {
    name: 'Fire',
    color: '#F08030',
    double_damage_to: [
      { type: 'Grass', multiplier: 2 },
      { type: 'Ice', multiplier: 2 },
    ],
    half_damage_to: [
      { type: 'Water', multiplier: 0.5 },
      { type: 'Rock', multiplier: 0.5 },
    ],
    no_damage_to: [],
    quarter_damage_to: [],
    one_damage_to: [
      { type: 'Normal', multiplier: 1 },
      { type: 'Poison', multiplier: 1 },
    ],
  },
  {
    name: 'Water',
    color: '#6890F0',
    double_damage_to: [
      { type: 'Fire', multiplier: 2 },
      { type: 'Rock', multiplier: 2 },
    ],
    half_damage_to: [
      { type: 'Water', multiplier: 0.5 },
      { type: 'Grass', multiplier: 0.5 },
    ],
    no_damage_to: [],
    quarter_damage_to: [{ type: 'Electric', multiplier: 0.25 }],
    one_damage_to: [{ type: 'Ice', multiplier: 1 }],
  },
  {
    name: 'Grass',
    color: '#78C850',
    double_damage_to: [
      { type: 'Water', multiplier: 2 },
      { type: 'Rock', multiplier: 2 },
    ],
    half_damage_to: [
      { type: 'Fire', multiplier: 0.5 },
      { type: 'Flying', multiplier: 0.5 },
    ],
    no_damage_to: [],
    quarter_damage_to: [],
    one_damage_to: [{ type: 'Bug', multiplier: 1 }],
  },
]

const abilitiesData = [
  {
    name: 'Overgrow',
    description:
      'Boosts the power of Grass-type moves when the Pokémon’s HP is low.',
    is_hidden: false,
  },
  {
    name: 'Chlorophyll',
    description: 'Boosts the Pokémon’s Speed stat in harsh sunlight.',
    is_hidden: true,
  },
]

const pokedexEntryData = {
  description:
    "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  habitat: 'Grassland',
  height: 0.7,
  weight: 6.9,
  shiny: true,
}

const eggGroupData = {
  eggGroups: ['Monster', 'Grass'],
  hatchTime: 20,
}

const DetailPage: React.FC = () => {
  return (
    <PageContainer>
      <PokemonCategory />

      <Banner />

      <EvolutionCard evolutionChain={evolutionData} />
      <ContentWrapper>
        <LeftColumn>
          <PokedexEntry entry={pokedexEntryData} />
          <PokemonStats stats={statsData} />
          <PokemonTypes types={typesData} />
        </LeftColumn>

        <RightColumn>
          <Moves moves={movesData} />
          <Abilities abilities={abilitiesData} />
          <EggGroup
            eggGroups={eggGroupData.eggGroups}
            hatchTime={eggGroupData.hatchTime}
          />
        </RightColumn>
      </ContentWrapper>
    </PageContainer>
  )
}

export default DetailPage
