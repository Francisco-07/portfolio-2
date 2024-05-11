import { Typography, Container, Box } from '@mui/material'
import Link from 'next/link'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead'

const success = () => {
  return (
    <Container
      sx={{
        py: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        height: '100vh',
        gap: 5,
        '& a': {
          color: 'secondary.main',
          ':hover': {
            color: 'secondary.light',
          },
        },
      }}
    >
      <Box sx={{ transform: 'rotate(-18deg)' }}>
        <MarkEmailReadIcon sx={{ fontSize: 185 }} />
      </Box>
      <div>
        <Typography variant='h4'>
          Mensaje enviado, pronto estare en contacto!
        </Typography>
        <Typography variant='h4'>
          <Link href='/'>{'Volver al inicio ->'}</Link>
        </Typography>
      </div>
    </Container>
  )
}
export default success
