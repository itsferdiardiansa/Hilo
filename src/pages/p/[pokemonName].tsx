import { GetServerSideProps } from 'next'

import DashboardLayout from '@/components/layout/DashboardLayout'
import PokemonDetail from '@/features/pokemon/pages/pokemon-detail'
import { fetchPokemonDetails } from '@/features/pokemon/api/pokemonApi'

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

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { pokemonName } = context.params!;

//   try {
//     const pokemon = await fetchPokemonDetails(pokemonName as string);

//     return {
//       props: {
//         pokemon,
//       },
//     };
//   } catch (error) {
//     return {
//       notFound: true
//     }
//   }
// }

export default PokemonDetailPage
