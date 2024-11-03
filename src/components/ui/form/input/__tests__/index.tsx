import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Input from '..'

describe('components/ui/form/input', () => {
  it('renders Input component with placeholder', () => {
    render(<Input placeholder="Search your pokemon" />)

    const inputElement = screen.getByPlaceholderText(/search your pokemon/i)
    expect(inputElement).toBeInTheDocument()
  })

  it('calls onChange handler when input changes', () => {
    const handleChange = jest.fn()

    render(<Input placeholder="Search" onChange={handleChange} />)

    const inputElement = screen.getByPlaceholderText(/search/i)

    fireEvent.change(inputElement, { target: { value: 'Pikachu' } })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(inputElement).toHaveValue('Pikachu')
  })
})
