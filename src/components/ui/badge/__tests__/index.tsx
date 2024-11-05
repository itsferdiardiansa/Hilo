import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Badge from ".."
import { typeColors } from "@/constants/typeColors"

describe("Badge Component", () => {
  it("renders with the correct type and color", () => {
    const type = "fire"
    const expectedColor = typeColors[type]

    render(<Badge type={type} />)

    const badgeElement = screen.getByText(type)
    expect(badgeElement).toBeInTheDocument()

    expect(badgeElement).toHaveStyle(`background-color: ${expectedColor}`)
  })
})
