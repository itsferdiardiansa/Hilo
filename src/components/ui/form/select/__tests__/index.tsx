import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Select from "../Select"

interface Pokemon {
  id: number
  name: string
}

const pokemonOptions: Pokemon[] = [
  { id: 1, name: "Bulbasaur" },
  { id: 2, name: "Charmander" },
  { id: 3, name: "Squirtle" },
]

describe("components/ui/form/select", () => {
  it("renders Select component with options", () => {
    render(
      <Select
        options={pokemonOptions}
        value={null}
        onChange={() => {}}
        getOptionLabel={(option) => option.name}
      />,
    )

    const selectElement = screen.getByText(/choose/i)
    expect(selectElement).toBeInTheDocument()

    pokemonOptions.forEach((pokemon) => {
      expect(screen.getByText(pokemon.name)).toBeInTheDocument()
    })
  })

  it("calls onChange handler with selected option", () => {
    const handleChange = jest.fn()
    render(
      <Select
        options={pokemonOptions}
        value={null}
        onChange={handleChange}
        getOptionLabel={(option) => option.name}
      />,
    )

    const selectElement = screen.getByDisplayValue(/choose/i)
    fireEvent.change(selectElement, {
      target: { value: pokemonOptions[1].name },
    })

    expect(handleChange).toHaveBeenCalledWith(pokemonOptions[1])
  })
})
