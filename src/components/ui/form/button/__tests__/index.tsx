import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Button from ".."

describe("components/ui/form/button", () => {
  it("renders Button component with text", () => {
    render(<Button label="Click Me" />)

    const buttonElement = screen.getByText(/click me/i)
    expect(buttonElement).toBeInTheDocument()
  })

  test("calls onClick handler when button is clicked", () => {
    const handleClick = jest.fn()

    render(<Button onClick={handleClick}>Click Me</Button>)

    const buttonElement = screen.getByText(/click me/i)

    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
