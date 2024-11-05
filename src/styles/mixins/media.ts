import { css } from "styled-components"
import { breakpoints } from "../settings/breakpoints"

export const mediaQuery = (key: keyof typeof breakpoints) => {
  return (styles: any) => css`
    @media (max-width: ${breakpoints[key]}) {
      ${styles}
    }
  `
}
