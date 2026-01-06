"use client"

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps, useTheme as useNextTheme } from "next-themes"

export const useTheme = useNextTheme

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
