// src/pages/_app.tsx
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import GlobalStyles from '@/styles/GlobalStyles'
import { theme } from '../styles/settings/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  // Inisiasi QueryClient dan gunakan dehydratedState dari props
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
