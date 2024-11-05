import DashboardLayout from '@/components/layout/DashboardLayout'
import PokemonDetail from '@/features/pokemon/pages/pokemon-detail'

interface PokemonDetailPageProps {
  pokemon: {
    id: number
    name: string
    image: string
    types: string[]
    abilities: string[]
    weight: number
    height: number
  }
}

const PokemonDetailPage: React.FC<PokemonDetailPageProps> = ({ pokemon }) => {
  return (
    <DashboardLayout>
      <PokemonDetail pokemon={pokemon} />;
    </DashboardLayout>
  )
}

export default PokemonDetailPage
