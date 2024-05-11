import { Typography, Box } from '@mui/material'
import { GitHub } from '@mui/icons-material'

const Footer = () => {
  return (
    <footer>
      <a target='_blank' href='https://github.com/Francisco-07'>
        <Box
          sx={{
            bgcolor: 'primary.dark',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            py: 3,
            gap: 1,
            '& svg': {
              fontSize: 30,
            },
            '&:hover': {
              '& svg': {
                fontSize: 30,
                color: 'secondary.main',
              },
            },
          }}
        >
          <Typography variant='h6'>Desarrollo con Next JS & MUI</Typography>

          <GitHub />
        </Box>
      </a>
    </footer>
  )
}
export default Footer
