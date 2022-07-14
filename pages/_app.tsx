import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DashboardLayout from '../components/DashboardLayout'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </ThemeProvider>
  )
}

export default MyApp
