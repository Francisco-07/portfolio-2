'use client'
import {
  experimental_extendTheme as extendTheme,
  responsiveFontSizes,
} from '@mui/material/styles'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'

const extendedTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          light: '#fff',
          dark: '#e3f2fd',
          main: '#fcfcfc',
        },
        secondary: {
          main: '#2b6ac9',
          dark: '#10356b',
          light: '#4d94ff',
        },
        background: {
          default: '#fcfcfc',
        },
        text: {
          primary: '#000',
          secondary: '#a7a4a4',
        },
      },
      // button y acordion divider
      // @ts-ignore
      components: {
        // inputs & TextAreas start
        MuiInputLabel: {
          styleOverrides: {
            root: {
              color: '#000',
            },
          },
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              '--TextField-brandBorderColor': '#000',
              '--TextField-brandBorderHoverColor': '#111111',
              '--TextField-brandBorderFocusedColor': '#2b6ac9',
              '& label.Mui-focused': {
                color: 'var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            notchedOutline: {
              borderColor: 'var(--TextField-brandBorderColor)',
            },
            root: {
              [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: 'var(--TextField-brandBorderHoverColor)',
              },
              [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: 'var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
        MuiFilledInput: {
          styleOverrides: {
            root: {
              '&::before, &::after': {
                borderBottom: '2px solid var(--TextField-brandBorderColor)',
              },
              '&:hover:not(.Mui-disabled, .Mui-error):before': {
                borderBottom:
                  '2px solid var(--TextField-brandBorderHoverColor)',
              },
              '&.Mui-focused:after': {
                borderBottom:
                  '2px solid var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
        MuiInput: {
          styleOverrides: {
            root: {
              '&::before': {
                borderBottom: '2px solid var(--TextField-brandBorderColor)',
              },
              '&:hover:not(.Mui-disabled, .Mui-error):before': {
                borderBottom:
                  '2px solid var(--TextField-brandBorderHoverColor)',
              },
              '&.Mui-focused:after': {
                borderBottom:
                  '2px solid var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
      },
      // inputs & TextAreas end
    },
    dark: {
      palette: {
        primary: {
          main: '#20272F',
          dark: '#171C22',
          light: '#2d3742',
        },
        secondary: {
          dark: '#118888',
          main: '#2dd4bf',
          light: '#34f8f8',
        },
        background: {
          default: '#20272F',
        },
        text: {
          primary: '#fff',
          secondary: '#a7a4a4',
        },
      },
      // @ts-ignore
      components: {
        // inputs & TextAreas start
        MuiInputLabel: {
          styleOverrides: {
            root: {
              color: '#fff',
            },
          },
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              '--TextField-brandBorderColor': '#ffffff',
              '--TextField-brandBorderHoverColor': '#cfcfcf',
              '--TextField-brandBorderFocusedColor': '#2dd4bf',
              '& label.Mui-focused': {
                color: 'var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            notchedOutline: {
              borderColor: 'var(--TextField-brandBorderColor)',
            },
            root: {
              [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: 'var(--TextField-brandBorderHoverColor)',
              },
              [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: 'var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
        MuiFilledInput: {
          styleOverrides: {
            root: {
              '&::before, &::after': {
                borderBottom: '2px solid var(--TextField-brandBorderColor)',
              },
              '&:hover:not(.Mui-disabled, .Mui-error):before': {
                borderBottom:
                  '2px solid var(--TextField-brandBorderHoverColor)',
              },
              '&.Mui-focused:after': {
                borderBottom:
                  '2px solid var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
        MuiInput: {
          styleOverrides: {
            root: {
              '&::before': {
                borderBottom: '2px solid var(--TextField-brandBorderColor)',
              },
              '&:hover:not(.Mui-disabled, .Mui-error):before': {
                borderBottom:
                  '2px solid var(--TextField-brandBorderHoverColor)',
              },
              '&.Mui-focused:after': {
                borderBottom:
                  '2px solid var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
      },
      // inputs & TextAreas end
    },
  },
})

const theme = responsiveFontSizes(extendedTheme)

export default theme
