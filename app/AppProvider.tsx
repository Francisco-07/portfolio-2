'use client'
import theme from './theme'
import React, { ReactNode } from 'react'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

interface AppProviderProps {
  children: ReactNode
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [mounted, setMounted] = React.useState<boolean>(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    // @ts-ignore
    <CssVarsProvider theme={theme} defaultMode='dark'>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  )
}
export default AppProvider
