'use client'
import Link from 'next/link'
import { Container } from '@mui/material'
import { Typography } from '@mui/material'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred'

export default function NotFound() {
  return (
    <Container
      sx={{
        color: 'text.primary',
        textAlign: 'center',
        py: 12,
        height: '100vh',
        '& a': {
          color: 'secondary.main',
          ':hover': {
            color: 'secondary.light',
          },
        },
      }}
    >
      <ReportGmailerrorredIcon sx={{ fontSize: 255 }} />
      <div>
        <Typography variant='h4'>Ruta no existente!</Typography>
        <Typography variant='h4'>
          <Link href='/'>{'Volver al inicio ->'}</Link>
        </Typography>
      </div>
    </Container>
  )
}
