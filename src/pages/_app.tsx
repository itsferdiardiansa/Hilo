import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import { useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import GlobalStyles from "@/styles/GlobalStyles"
import { theme } from "@/styles/settings/theme"
// import { StyledComponentsRegistry } from './StyledComponentRegistry'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {/* <StyledComponentsRegistry> */}
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Component {...pageProps} />
      </ThemeProvider>
      {/* </StyledComponentsRegistry> */}
    </QueryClientProvider>
  )
}
