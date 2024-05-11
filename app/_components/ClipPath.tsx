import { Box, BoxProps } from '@mui/material'

interface ClipPathProps extends BoxProps {
  clipPath: string
  bgColor: string
  mt?: number | string
  mb?: number | string
}

const ClipPath: React.FC<ClipPathProps> = ({ clipPath, bgColor, mt, mb }) => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100px',
        clipPath: clipPath,
        bgcolor: bgColor,
        mt: mt,
        mb: mb,
      }}
    />
  )
}

export default ClipPath
