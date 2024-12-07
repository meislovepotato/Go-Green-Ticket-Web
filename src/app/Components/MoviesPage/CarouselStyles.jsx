import { styled } from '@mui/system'
import { Box, Button } from '@mui/material'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const CarouselContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  overflowX: 'hidden',
  width: '100%',
  position: 'relative',
})

export const MoviesWrapper = styled(Box)({
  display: 'flex',
  gap: '1px',
  flexDirection: 'row',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  scrollBehavior: 'smooth',

  /* Custom Scrollbar Styling */
  '&::-webkit-scrollbar': {
    height: '13px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'linear-gradient(to right, #4CAF50, #32CD32, #4CAF50)',
    borderRadius: '4px',
    width: '2px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: 'linear-gradient(to right, #45A049, #3CB371, #45A049)',
  },
  '&::-webkit-scrollbar-track': {
    background: 'linear-gradient(to right, black, #006400, #006400, black)',
    borderRadius: '4px',
    margin: '20px',
  },
})

export const MovieBox = styled(Box)(({ theme }) => ({
  minWidth: '306.5px',
  height: '580px',
  backgroundColor: theme.palette.color.grey,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  color: 'white',
  padding: '10px 20px',
  gap: '5px',
  boxSizing: 'border-box',
  marginBottom: '10px',
}))

export const MoviePicture = styled(Box)({
  minWidth: '100%',
  height: '100%',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  color: 'white',
})

export const MovieTitle = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontFamily: theme.typography.luckiestGuy,
  fontSize: '40px',
}))

export const MovieDetailsTop = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  color: 'white',
})

export const MovieDetailsBottom = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  color: 'white',
})

export const ArrowContainer = styled(Box)({
  position: 'absolute',
  top: '50%',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  pointerEvents: 'none',
})

export const NextArrowContainer = styled(Box)({
  position: 'absolute',
  top: '50%',
  right: '0',
  transform: 'translateY(-50%)',
  pointerEvents: 'all',
})

export const PrevArrowContainer = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '0',
  transform: 'translateY(-50%)',
  pointerEvents: 'all',
})

export const NextArrow = styled(ChevronRight)(({ theme }) => ({
  color: theme.palette.color.green,
  strokeWidth: '1px',
  cursor: 'pointer',
  transition: 'filter 1s ease',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  marginRight: '5px',
  opacity: 0.2,

  '&:hover': {
    filter: `drop-shadow(2px 4px 10px ${theme.palette.color.black})`,
    opacity: 1,
  },
}))

export const PrevArrow = styled(ChevronLeft)(({ theme }) => ({
  color: theme.palette.color.green,
  strokeWidth: '1px',
  cursor: 'pointer',
  transition: 'filter 1s ease',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  marginLeft: '5px',
  opacity: 0.2,

  '&:hover': {
    filter: `drop-shadow(2px 4px 10px ${theme.palette.color.black})`,
    opacity: 1,
  },
}))

export const Calendar = styled(Box)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.color.green,
  strokeWidth: '1px',
  width: '100%',
}))

export const Price = styled(Box)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.color.green,
  strokeWidth: '1px',
  width: '100%',
}))

export const Location = styled(Box)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.color.green,
  strokeWidth: '1px',
  width: '100%',
}))

export const Booking = styled(Button)(({ theme }) => ({
  display: 'flex',
  color: 'white',
  fontFamily: theme.typography.k2d,
  fontSize: '15px',
  border: `1.5px solid ${theme.palette.color.green}`,
  backgroundColor: theme.palette.color.black,
  cursor: 'pointer',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
}))
