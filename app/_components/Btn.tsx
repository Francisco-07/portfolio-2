import { Button } from '@mui/material'

interface BtnProps {
  children: React.ReactNode
  contained: boolean
  href?: string
}

const Btn: React.FC<BtnProps> = ({ children, contained, href }) => {
  return (
    <Button
      type='submit'
      sx={(theme) => ({
        border: `1px solid ${theme.palette.secondary.main}`,
        color: `${contained ? 'secondary.contrastText' : 'secondary.main'}`,
        bgcolor: `${contained ? 'secondary.main' : 'transparent'}`,
        py: 1.8,
        px: 2.7,
        fontWeight: 'bold',
        fontSize: 19,
        transition: 'all 0.3s',
        '&:hover': {
          border: `1px solid ${theme.palette.secondary.main}`,
          color: `${contained ? 'secondary.main' : 'secondary.contrastText'}`,
          bgcolor: `${contained ? 'transparent' : 'secondary.main'}`,
        },
      })}
      href={href}
    >
      {children}
    </Button>
  )
}
export default Btn
