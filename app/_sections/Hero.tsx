'use client'
import Img from '../_components/Img'
import { Typography, Box, Container } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import Btn from '../_components/Btn'
import { TypeAnimation } from 'react-type-animation'

const Hero: React.FC = () => {
  const icons = [
    {
      icon: <LinkedInIcon />,
      link: 'https://www.linkedin.com/in/francisco-garciarena/',
    },
    {
      icon: <GitHubIcon />,
      link: 'https://github.com/Francisco-07',
    },
    {
      icon: <EmailIcon />,
      link: 'mailto:francisco.garciarena94@gmail.com',
    },
  ]

  return (
    <Container
      sx={{
        display: 'flex',
        height: 'calc(100vh - 160px)',
        minHeight: '700px',
        py: 7,
      }}
    >
      <Box
        sx={{
          flex: {
            xs: 1,
            md: 0.6,
          },
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <Box>
          <Typography
            variant='h1'
            sx={{
              backgroundImage:
                'linear-gradient(90deg, rgba(45, 212, 191, 1) 0%, rgba(54, 111, 196, 1) 50%,  rgba(8, 58, 133, 1) 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              fontSize: {
                sm: '115px',
              },
            }}
          >
            Francisco Garciarena
          </Typography>
          <Typography variant='h4'>
            <TypeAnimation
              sequence={[
                'Desarrollador FullStack',
                1000,
                'Desarrollador Web',
                1000,
                'Desarrollador de Apps',
                1000,
                'Desarrollador de APIs',
                1000,
              ]}
              wrapper='span'
              speed={35}
              repeat={Infinity}
            />
          </Typography>
        </Box>
        <Box>
          <Typography>
            Desarrollo aplicaciones web responsivas y modernas. Mi enfoque se
            centra en crear experiencias digitales innovadoras que se adaptan a
            las necesidades del usuario.
          </Typography>
        </Box>
        <Box>
          <Btn href={'#about'} contained={false}>
            Sobre mi
          </Btn>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
          }}
        >
          {icons.map((icon, i) => (
            <a target='_blank' href={icon.link} key={i}>
              <Box
                sx={{
                  display: 'flex',
                  p: {
                    xs: 3,
                    sm: 4,
                  },
                  cursor: 'pointer',
                  bgcolor: 'secondary.main',
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                  '&:hover': {
                    bgcolor: 'secondary.light',
                  },
                  '& svg': {
                    color: 'primary.main',
                    fontSize: {
                      xs: 25,
                      sm: 35,
                    },
                  },
                }}
              >
                {icon.icon}
              </Box>
            </a>
          ))}
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          display: {
            xs: 'none',
            md: 'flex',
          },
          justifyContent: 'center',
          flex: 0.4,
          mt: 7,
          '& img': {
            boxShadow: `  44px 0px 0px 20px ${theme.palette.primary.dark}`,
          },
        })}
      >
        <Img
          width={'330px'}
          height={'330px'}
          src={'/images/yo.jpg'}
          radius={'50%'}
          alt='yo'
          priority={true}
        />
      </Box>
    </Container>
  )
}
export default Hero
