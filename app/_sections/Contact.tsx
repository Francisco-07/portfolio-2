'use client'
import Form from '../_components/Form'
import { Container, Box, Typography, Divider } from '@mui/material'
import Title from '../_components/Title'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

const Contact = () => {
  const icons = [
    {
      icon: <LinkedInIcon />,
      link: 'https://www.linkedin.com/in/francisco-garciarena/',
    },
    { icon: <EmailIcon />, link: 'mailto:francisco.garciarena94@gmail.com' },
  ]
  return (
    <Box id='contact' sx={{ py: 7, bgcolor: 'primary.dark' }}>
      <Title title='Contacto' align='center' color='default' />
      <Container
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          justifyContent: 'center',
          alignItems: {
            xs: 'center',
            md: 'flex-start',
          },
          pt: 5,
          gap: 8,
        }}
      >
        <Box
          sx={{
            width: { sx: '100%', md: '330px' },
            display: 'flex',
            flexDirection: 'column',
            borderTop: '1px solid',
            borderLeft: '1px solid',
            borderColor: 'secondary.main',
            borderTopLeftRadius: '7px',
            pt: 3,
            pl: 3,
          }}
        >
          <Box>
            <Typography sx={{ fontSize: '20px' }}>
              Queres hablar sobre un proyecto? No dudes en llenar el formulario
              de contacto o escribirme en mis redes.
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              '& svg': {
                cursor: 'pointer',
                fontSize: 40,
                '&:hover': {
                  color: 'secondary.main',
                },
              },
            }}
          >
            {icons.map((icon, i) => (
              <a target='_blank' href={icon.link} key={i}>
                {icon.icon}
              </a>
            ))}
          </Box>
        </Box>
        <Box sx={{ width: { sx: '100%', md: '400px' } }}>
          <Form />
        </Box>
      </Container>
    </Box>
  )
}
export default Contact
