import { Box } from '@mui/material'
import Image from 'next/image'

interface ImgProps {
  width?: string | number
  height?: string | number
  position?: any
  src: any
  radius?: string | number
  alt: string
  border?: string
  bColor?: string
  boxshadow?: number
  priority?: boolean
}

const Img: React.FC<ImgProps> = ({
  width,
  height,
  position,
  src,
  radius,
  border,
  alt,
  bColor,
  boxshadow,
  priority,
}) => {
  return (
    <Box
      sx={{
        width: { width },
        height: { height },
        display: 'flex',
        justifyContent: 'center',
        position: { position },
        zIndex: -1,
        '& img': {
          border: { border },
          borderColor: { bColor },
          borderRadius: `${radius}`,
          boxShadow: { boxshadow },
        },
      }}
    >
      <Image
        priority={priority}
        width={0}
        height={0}
        sizes='100vw'
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        alt={alt}
        src={src}
      />
    </Box>
  )
}
export default Img
