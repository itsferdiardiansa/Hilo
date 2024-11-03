import DashboardLayout from '@/components/layout/DashboardLayout'
import Head from 'next/head'

import PokemonList from '@/features/pokemon/pages/pokemon-list/PokemonList'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokédex - Your Pokémon Encyclopedia</title>
        <meta
          name="description"
          content="Explore detailed information about every Pokémon in the Pokédex."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="theme-color" content="#ff0000" />

        <meta
          property="og:title"
          content="Pokédex - Your Pokémon Encyclopedia"
        />
        <meta
          property="og:description"
          content="Discover information on all Pokémon, including stats, types, evolutions, and more."
        />
        <meta property="og:type" content="website" />
      </Head>

      <main>
        <DashboardLayout>
          <PokemonList />
        </DashboardLayout>
      </main>
    </>
  )
}
