import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LanguageProvider } from '../contexts/LanguageContext'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  )
}
