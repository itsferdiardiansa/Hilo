// src/components/ui/NotFound.tsx
import styled from 'styled-components'
import { CenteredContainer } from './PokemonNotFound.styles'

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 200px;
    margin-bottom: 20px;
  }

  figcaption {
    font-size: 1.2rem;
    color: #ffffff;
    margin-top: 24px;
    font-weight: bold;
  }
`

const NotFound = () => (
  <CenteredContainer>
    <Figure>
      <svg
        width="200"
        height="200"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <circle cx="512" cy="512" r="500" fill="#FDD835" />
        <circle cx="712" cy="400" r="40" fill="#333" />
        <circle cx="312" cy="400" r="40" fill="#333" />
        <ellipse cx="512" cy="650" rx="130" ry="80" fill="#FF5252" />
        <path
          d="M362 740c30 50 120 50 160 0"
          stroke="#333"
          stroke-width="20"
          fill="none"
        />
        <path
          d="M800 800c10-50 10-100-30-150M224 800c-10-50-10-100 30-150"
          stroke="#333"
          stroke-width="15"
          fill="none"
        />
      </svg>

      <figcaption>Pokemon Not Found</figcaption>
    </Figure>
  </CenteredContainer>
)

export default NotFound
