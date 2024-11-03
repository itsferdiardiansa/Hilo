import { breakpoints } from './breakpoints'

export const theme = {
  colors: {
    primary: '#333333',
    secondary: '#ffffff',
    accent: '#7289da',
    background: '#f5f5f5',
    foreground: '#171717',
  },
  fonts: {
    primary: 'Poppins, sans-serif',
  },
  breakpoints,
}

export const cssVariables = `
  --color-primary: ${theme.colors.primary};
  --color-secondary: ${theme.colors.secondary};
  --color-accent: ${theme.colors.accent};
  --color-background: ${theme.colors.background};
  --color-foreground: ${theme.colors.foreground};
  --font-primary: ${theme.fonts.primary};
`
