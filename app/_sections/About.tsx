'use client'
import Title from '../_components/Title'
import { Container, Box } from '@mui/material'
import AspectRatioIcon from '@mui/icons-material/AspectRatio'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import CodeIcon from '@mui/icons-material/Code'
import Card from '../_components/Card'

const About = () => {
  const data = [
    {
      title1: 'Front-end',
      title2: 'Herramientas:',
      text1:
        'Diseño interfaces web atractivas y funcionales con enfoque en usabilidad y tecnologías modernas.',
      text2: 'HTML, Css, JS, TS, React, Next, MUI, Bootstrap',
      icon: <CodeIcon />,
    },
    {
      title1: 'Diseñador',
      title2: 'herramientas:',
      text1:
        'Creo diseños que comunican mensajes claros y emocionantes, combinando estética y funcionalidad.',
      text2: 'Figma, Photoshop, Adobe illustrator',
      icon: <AspectRatioIcon />,
    },
    {
      title1: 'Back-end',
      title2: 'Herramientas:',
      text1:
        'Desarrollo sistemas robustos para procesar datos y ofrecer experiencias web dinámicas y eficientes.',
      text2: 'Node Js, Express, JWT, Sanity, MongoDB',
      icon: <SportsEsportsIcon />,
    },
  ]
  return (
    <Box
      sx={{
        bgcolor: 'primary.dark',
        py: 7,
      }}
      id={'about'}
    >
      <Container>
        <Title title={'Sobre mi'} align={'center'} color={'default'} />
        <Box
          sx={{
            mt: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
          }}
        >
          {data.map((info, i) => (
            <Card info={info} key={i} />
          ))}
        </Box>
      </Container>
    </Box>
  )
}
export default About
