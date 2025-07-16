'use client'

import { ChakraProvider, extendTheme, type ThemeConfig } from '@chakra-ui/react'

const colors = {
  light: {
    background: '#ffffff',
    foreground: '#171717',
  },
  dark: {
    background: '#0a0a0a',
    foreground: '#ededed',
  },
}

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: '#f7fafc',
      100: '#edf2f7',
      200: '#e2e8f0',
      300: '#cbd5e0',
      400: '#a0aec0',
      500: '#718096',
      600: '#4a5568',
      700: '#2d3748',
      800: '#1a202c',
      900: '#171923',
    },
  },
  semanticTokens: {
    colors: {
      'page.bg': {
        default: colors.light.background,
        _dark: colors.dark.background,
      },
      'page.text': {
        default: colors.light.foreground,
        _dark: colors.dark.foreground,
      },
    },
  },
  fonts: {
    heading: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'var(--font-geist-mono), "SF Mono", Monaco, Inconsolata, "Roboto Mono", "Source Code Pro", monospace',
  },
  styles: {
    global: {
      body: {
        bg: 'page.bg',
        color: 'page.text',
      },
    },
  },
})

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}