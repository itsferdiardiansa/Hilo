import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../page'

describe('Home Page', () => {
  beforeEach(() => {
    render(<Home />)
  })

  it('renders the main logo image', () => {
    const logoImage = screen.getByAltText('Next.js logo')
    expect(logoImage).toBeInTheDocument()
  })

  it('renders the primary link with text "Deploy now"', () => {
    const deployLink = screen.getByRole('link', { name: /deploy now/i })

    expect(deployLink).toBeInTheDocument()
    expect(deployLink).toHaveAttribute(
      'href',
      expect.stringContaining('vercel.com'),
    )
  })
})
