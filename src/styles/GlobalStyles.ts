import { createGlobalStyle } from "styled-components"
import { cssVariables } from "./settings/theme"

const GlobalStyles = createGlobalStyle`
  :root {
    ${cssVariables}
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color-background: #171717;
      --color-foreground: #ffffff;
    }
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  a {
    text-decoration: none;
  }
    
  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-primary);
    background-color: var(--color-background);
    color: var(--color-foreground);
  }
`

export default GlobalStyles
