import {
  CardsGrid,
  Card,
  CardInfo,
  PokemonImage,
  PokemonImageContainer,
  PokemonName,
} from "./PokemonCategory.styles"

const pokemonCards = [
  {
    name: "Bulbasaur",
    type: "Grass",
    bgColor: "#78C850",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Charmander",
    type: "Fire",
    bgColor: "#F08030",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Squirtle",
    type: "Water",
    bgColor: "#6890F0",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "Pikachu",
    type: "Electric",
    bgColor: "#F8D030",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "Jigglypuff",
    type: "Fairy",
    bgColor: "#EE99AC",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
  },
  {
    name: "Meowth",
    type: "Normal",
    bgColor: "#A8A878",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
  },
]

const PokemonCategory = () => {
  return (
    <CardsGrid>
      {pokemonCards.map((pokemon, index) => (
        <Card key={index} $bgColor={pokemon.bgColor}>
          <CardInfo>
            <PokemonName>{pokemon.name}</PokemonName>
          </CardInfo>
          <PokemonImageContainer $shapeColor={pokemon.bgColor}>
            <PokemonImage src={pokemon.imgUrl} alt={pokemon.name} />
          </PokemonImageContainer>
        </Card>
      ))}
    </CardsGrid>
  )
}

export default PokemonCategory
