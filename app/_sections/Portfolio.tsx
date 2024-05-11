'use client'
import { Container, Box, Divider } from '@mui/material'
import Img from '../_components/Img'
import Title from '../_components/Title'
import ViewCompactIcon from '@mui/icons-material/ViewCompact'
import Link from 'next/link'
import OpenInNewSharpIcon from '@mui/icons-material/OpenInNewSharp'

const Portfolio = () => {
  const data = [
    {
      title: 'Pixelar',
      text: 'landing page con un estilo moderno, creada con Next Js y Material UI.',
      url: '#',
    },
    {
      title: 'ProShop',
      text: 'Proyecto fullstack, desarrollado con react para el frontend, express para el backend, redux para el state managment y mongodb como base de datos, JWT, sistema de admin para realizar las operaciones CRUD',
      url: '#',
    },
    {
      title: 'Imgblog',
      text: 'Portfolio/blog, diseñado con Next Js, Material UI y Sanity para el manejo de contenido.',
      url: '#',
    },
  ]
  return (
    <Container
      id={'portfolio'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        py: 7,
        gap: 7,
      }}
    >
      <Title title='Portfolio' align='center' color='default' />
      {data.map((info, i) => (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 7,
          }}
          key={i}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                md: `${i % 2 === 0 ? 'row-reverse' : 'row'}`,
              },
              justifyContent: 'center',
              alignItems: {
                xs: 'flex-start',
                md: 'center',
              },
              gap: 5,
            }}
          >
            <Box
              sx={{
                flex: 0.6,
                '& a:hover': {
                  color: 'secondary.main',
                },
              }}
            >
              <Title
                title={info.title}
                align='start'
                paragraphs={[info.text]}
                color='default'
              />
              <Link href={info.url}>
                <OpenInNewSharpIcon
                  sx={{
                    fontSize: 35,
                  }}
                />
              </Link>
            </Box>
            <Box
              sx={{
                flex: 0.4,
                position: 'relative',
                '& img': {
                  boxShadow: 8,
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '7px',
                  left: '-2px',
                  zIndex: '-1',
                  transform: 'scale(5) rotate(90deg)',
                  display: {
                    xs: 'none',
                    md: 'flex',
                  },
                }}
              >
                <ViewCompactIcon />
              </Box>
              <Img
                src={`/images/pagina${i + 1}.jpg`}
                height={'auto'}
                width={'100%'}
                radius={'7px'}
                alt='ejemplo de pagina'
              />
            </Box>
          </Box>
          {i + 1 === data.length ? null : <Divider />}
        </Box>
      ))}
    </Container>
  )
}
export default Portfolio
