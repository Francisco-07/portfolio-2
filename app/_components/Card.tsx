import { Box, Typography } from '@mui/material'

interface Info {
  title1: string
  text1: string
  title2: string
  text2: string
  icon: JSX.Element
}

interface CardProps {
  info: Info
}

const Card: React.FC<CardProps> = ({ info }) => {
  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        borderRadius: '15px',
        borderBottomLeftRadius: '0',
        height: '100%',
        gap: 3,
        width: {
          xs: '95%',
          md: '320px',
        },
        p: {
          xs: 3,
          md: 5,
        },
        bgcolor: 'primary.light',
        boxShadow: `-15px 13px 0px -6px  ${theme.palette.secondary.main}`,
        transition: 'all 0.2s',
        '& svg': {
          fontSize: 38,
          color: 'secondary.main',
        },
        '&:hover': {
          '& > div': {
            borderColor: 'secondary.light',
            '& > svg': {
              color: 'secondary.light',
            },
          },
          boxShadow: `-15px 13px 0px -6px  ${theme.palette.secondary.light}`,
        },
      })}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid',
          borderColor: 'secondary.main',
          borderRadius: '50%',
          p: 1.5,
        }}
      >
        {info.icon}
      </Box>
      <Box sx={{ height: { sx: '100%', md: '150px' }, width: '100%' }}>
        <Typography variant='h5'>{info.title1}</Typography>
        <Typography>{info.text1}</Typography>
      </Box>
      <Box sx={{ height: { sx: '100%', md: '90px' } }}>
        <Typography variant='h6'>{info.title2}</Typography>
        <Typography>{info.text2}</Typography>
      </Box>
    </Box>
  )
}
export default Card
