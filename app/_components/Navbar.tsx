'use client'
import React from 'react'
import { Box, Container } from '@mui/material'
import Link from 'next/link'
import ModeNightIcon from '@mui/icons-material/ModeNight'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useColorScheme } from '@mui/material/styles'

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = React.useState(0)
  const [visible, setVisible] = React.useState(true)
  const { mode, setMode } = useColorScheme()
  const [open, setOpen] = React.useState(false)
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  const handleScroll = React.useCallback(() => {
    const currentScrollPos = window.scrollY

    setVisible(currentScrollPos < prevScrollPos ? true : false)

    setPrevScrollPos(currentScrollPos)
  }, [prevScrollPos])

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, visible, handleScroll])
  return (
    <>
      <Box
        sx={{
          width: '100vw',
          position: 'fixed',
          top: visible ? '0' : '-80px',
          zIndex: 90,
          transition: 'top 0.4s, background-color 0.4s',
          bgcolor: `${window.scrollY === 0 ? 'transparent' : 'primary.dark'}`,
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '60px',
          }}
        >
          <Box
            sx={{
              zIndex: '110',
              fontSize: 20,
              fontWeight: 'bold',
              '& :hover': {
                color: 'secondary.main',
              },
            }}
          >
            <Link href='/'>{'< FG />'}</Link>
          </Box>
          <Box
            onClick={toggleDrawer(!open)}
            sx={{
              display: {
                xs: 'flex',
                md: 'none',
              },
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              zIndex: '900',
              '& .hamburger-one': {
                bgcolor: 'primary.contrastText',
                '&::after': {
                  bgcolor: 'primary.contrastText',
                },
                '&::before': {
                  bgcolor: 'primary.contrastText',
                },
              },
            }}
          >
            <div className={open ? 'icon-one active-one' : 'icon-one'}>
              <div className='hamburger hamburger-one'></div>
            </div>
          </Box>
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
              alignItems: 'center',
              gap: 2,
              '& div': {
                p: 0.5,
              },
              '& div:hover': {
                bgcolor: 'primary.contrastText',
                color: 'primary.main',
                cursor: 'pointer',
                borderRadius: '4px',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={() => {
                if (mode === 'light') {
                  setMode('dark')
                } else {
                  setMode('light')
                }
              }}
            >
              {mode === 'light' ? <ModeNightIcon /> : <LightModeIcon />}
            </Box>
            <Link onClick={toggleDrawer(false)} href={'#about'}>
              <Box>Sobre mi</Box>
            </Link>
            <Link onClick={toggleDrawer(false)} href={'#portfolio'}>
              <Box>Portfolio</Box>
            </Link>
            <Link onClick={toggleDrawer(false)} href={'#contact'}>
              <Box>Contacto</Box>
            </Link>
          </Box>
          <Box
            sx={{
              zIndex: '100',
              position: 'fixed',
              top: 0,
              left: `${open ? '0%' : '-100vw'} `,
              display: {
                xs: 'flex',
                md: 'none',
              },
              width: '100vw',
              height: '100vh',
              transition: 'all 0.2s',
            }}
          >
            <Box
              sx={{
                bgcolor: 'primary.light',
                flex: 0.5,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  gap: 2,
                  mt: 15,
                  '& div': {
                    p: 0.5,
                  },
                  '& div:hover': {
                    bgcolor: 'primary.contrastText',
                    color: 'primary.main',
                    cursor: 'pointer',
                    borderRadius: '4px',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onClick={() => {
                    if (mode === 'light') {
                      setMode('dark')
                    } else {
                      setMode('light')
                    }
                  }}
                >
                  {mode === 'light' ? <ModeNightIcon /> : <LightModeIcon />}
                </Box>
                <Link onClick={toggleDrawer(false)} href={'#about'}>
                  <Box>Sobre mi</Box>
                </Link>
                <Link onClick={toggleDrawer(false)} href={'#portfolio'}>
                  <Box>Portfolio</Box>
                </Link>
                <Link onClick={toggleDrawer(false)} href={'#contact'}>
                  <Box>Contacto</Box>
                </Link>
              </Box>
            </Box>

            <Box
              sx={{
                flex: 0.5,
                backdropFilter: 'blur(4px)',
                ml: '-1px',
              }}
              onClick={toggleDrawer(false)}
            ></Box>
          </Box>
        </Container>
      </Box>

      {/* navbar height  */}
      <Box sx={{ height: '60px' }}></Box>
    </>
  )
}
export default Navbar
