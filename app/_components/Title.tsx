import { Typography, Box } from '@mui/material'
interface TitleProps {
  title: string
  paragraphs?: any
  align: 'start' | 'center'
  color: 'white' | 'black' | 'default'
}

const Title: React.FC<TitleProps> = ({ title, paragraphs, align, color }) => {
  return (
    <Box
      sx={{
        textAlign: `${align === 'start' ? 'start' : 'center'}`,
        color: `${
          color === 'white'
            ? 'common.white'
            : color === 'black'
            ? 'common.black'
            : 'text.primary'
        }`,
      }}
    >
      <Typography
        variant='h2'
        sx={{
          position: 'relative',
          pb: 1,
          mb: 2,
          '& span': {
            position: 'absolute',
            width: '45px',
            height: '7px',
            bgcolor: 'secondary.main',
            bottom: '0',
            left: `${align === 'start' ? '0%' : '50%'}`,
            transform: `${
              align === 'start' ? 'translate(0, 0)' : 'translate(-50%, 0)'
            }`,
          },
        }}
      >
        {title}
        <span />
      </Typography>
      {paragraphs?.length > 0
        ? paragraphs.map((p: string, i: number) => (
            <Typography key={i}>{p}</Typography>
          ))
        : null}
    </Box>
  )
}
export default Title
