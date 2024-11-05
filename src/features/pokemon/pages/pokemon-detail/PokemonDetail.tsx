import Banner from '@/features/pokemon/components/banner'
import Moves from '@/features/pokemon/components/moves/Moves'
import EvolutionCard from '@/features/pokemon/components/evolution-card'
import PokemonStats from '@/features/pokemon/components/pokemon-stats'
import PokemonTypes from '@/features/pokemon/components/pokemon-types'
import Abilities from '@/features/pokemon/components/abilities'
import PokedexEntry from '@/features/pokemon/components/pokemon-entry'
import EggGroup from '@/features/pokemon/components/egg-group/EggGroup'
import PokemonCategory from '@/features/pokemon/components/pokemon-category'
import type { Pokemon } from '@/features/pokemon/api/pokemonApi'

import {
  PageContainer,
  ContentWrapper,
  LeftColumn,
  RightColumn,
} from './PokemonDetail.styles'

import {
  abilitiesData,
  evolutionData,
  movesData,
  pokedexEntryData,
  statsData,
  typesData,
  eggGroupData,
} from './mockData'

interface PokemonDetailProps {
  pokemon: Pokemon
}

/* eslint-disable no-empty-pattern */
const DetailPage = ({}: PokemonDetailProps) => {
  return (
    <PageContainer>
      <PokemonCategory />

      <Banner />

      <EvolutionCard evolutionChain={evolutionData as any} />
      <ContentWrapper>
        <LeftColumn>
          <PokedexEntry entry={pokedexEntryData} />
          <PokemonStats stats={statsData} />
          <PokemonTypes types={typesData} />
        </LeftColumn>

        <RightColumn>
          <Moves moves={movesData as any} />
          <Abilities abilities={abilitiesData} />
          <EggGroup
            eggGroups={eggGroupData.eggGroups as any}
            hatchTime={eggGroupData.hatchTime as any}
          />
        </RightColumn>
      </ContentWrapper>
    </PageContainer>
  )
}

export default DetailPage
