import { useMemo, useState, useEffect } from "react"
import {
  SearchFormContainer,
  SearchFormWrapper,
  SearchTitle,
} from "./SearchForm.styles"
import { Select, Input, Button } from "@/components/ui/form"

interface SelectType {
  id: number
  name: string
}

interface SearchFormProps {
  onSearch: (filters: { type: string | null; name: string | null }) => void
  initialFilters: { type: string | null; name: string | null }
}

const SearchForm: React.FC<SearchFormProps> = ({
  onSearch,
  initialFilters,
}) => {
  const [selectedPokemonType, setSelectedPokemonType] =
    useState<SelectType | null>(null)
  const [pokemonName, setPokemonName] = useState<string>("")

  const pokemonTypes: SelectType[] = useMemo(
    () => [
      { id: 1, name: "fire" },
      { id: 2, name: "water" },
      { id: 3, name: "grass" },
      { id: 4, name: "electric" },
    ],
    [],
  )

  useEffect(() => {
    setPokemonName(initialFilters.name || "")

    if (initialFilters.type) {
      const matchedType = pokemonTypes.find(
        (type) => type.name === initialFilters.type,
      )
      setSelectedPokemonType(matchedType || null)
    } else {
      setSelectedPokemonType(null)
    }
  }, [initialFilters, pokemonTypes])

  const handleSearch = () => {
    onSearch({
      type: selectedPokemonType ? selectedPokemonType.name : null,
      name: pokemonName || null,
    })
  }

  return (
    <SearchFormContainer>
      <SearchTitle>Find Your Pokemon</SearchTitle>

      <SearchFormWrapper>
        <Input
          type="text"
          placeholder="Search by name"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />

        <Select
          options={pokemonTypes}
          value={selectedPokemonType}
          onChange={setSelectedPokemonType}
          getOptionLabel={(option) => option.name}
        />

        <Button label="Search" onClick={handleSearch} />
      </SearchFormWrapper>
    </SearchFormContainer>
  )
}

export default SearchForm
