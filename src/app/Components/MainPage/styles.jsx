import { Box, Button, styled } from '@mui/material'
import { LandPlot, Clock, CalendarDays, CircleChevronRight } from 'lucide-react'

export const BackgroundImage = styled(Box)(() => ({
  position: 'relative',
  height: '1000px',
  width: '100%',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundImage:
      'url(https://m.media-amazon.com/images/M/MV5BYTc1MDQ3NjAtOWEzMi00YzE1LWI2OWUtNjQ0OWJkMzI3MDhmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.3,
  },
}))

export const MainMenuBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  gap: '150px',
  padding: '2% 0',
  width: '100%',
  height: '120px',

  '@media (max-width: 1439px)': {
    gap: '100px',
  },
})

export const MainMenuStyles = styled(Button, {
  shouldForwardProp: (prop) => !['isHovered', 'isClicked'].includes(prop),
})(({ isHovered, isClicked, theme }) => ({
  color: 'white',
  cursor: 'pointer',
  border: isClicked
    ? `1.5px solid ${theme.palette.color.green}`
    : isHovered
      ? `1.5px solid ${theme.palette.color.green}`
      : 'null',
  borderRadius: '5px',
  position: 'relative',
  transition: 'border 0.05s ease',
  fontFamily: theme.typography.k2d,
  fontSize: '30px',
  padding: '0px 15px 0px 15px',

  '&::after': {
    content: '""',
    position: 'absolute',
    left: '50%',
    bottom: 5,
    width: 'calc(100% - 20px)',
    height: '3px',
    backgroundColor: theme.palette.color.green,
    transform: isClicked || isHovered ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
    transition: 'transform 0.3s ease',
    transformOrigin: 'center',
  },
}))

export const LatestMenu = styled(Box)(({ theme }) => ({
  border: `1.5px solid ${theme.palette.color.green}`,
  borderRadius: '10px',
  position: 'relative',
  margin: '0px 40px 40px 40px',
  height: 'calc(100% - 150px)',
  padding: '90px 70px',
  display: 'flex',
  alignItems: 'center',
  gap: 15,
  backgroundColor: `rgba(0, 0, 0, 0.5)`,
}))

export const LatestMovie = styled(Box)({
  backgroundImage:
    'url(https://m.media-amazon.com/images/M/MV5BYTc1MDQ3NjAtOWEzMi00YzE1LWI2OWUtNjQ0OWJkMzI3MDhmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg)',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  justifyItems: 'flex-start',
  height: '100%',
  width: '100%',
  filter: 'brightness(0.8)',
})

export const LatestMovieInfo = styled(Box)({
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
})

export const LatestMovietitle = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.luckiestGuy,
  color: 'white',
  height: '40%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',
  textAlign: 'center',
  lineHeight: '1',
  fontSize: '7vw',
}))

export const LatestMovieDescription = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  height: '100%',
  width: '100%',
  padding: '10px 30px',
  fontSize: '1vw',
  fontFamily: theme.typography.k2d,
  color: theme.palette.color.green,
}))

export const LatestMovieBuy = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '50%',
  width: '80%',
  justifyContent: 'center',
  padding: '10px 30px',
  fontSize: '1vw',
  fontFamily: theme.typography.k2d,
  color: theme.palette.color.green,
  border: `1.5px solid ${'white'}`,
  borderRadius: '10px',
  gap: theme.spacing(6),
}))

export const NextArrow = styled(CircleChevronRight)(({ theme }) => ({
  color: 'white',
  strokeWidth: '1px',
  cursor: 'pointer',
  transition: 'filter 0.7s ease',
  height: 'auto',

  '&:hover': {
    filter: `drop-shadow(0 0 20px ${theme.palette.color.green})`,
  },
}))

export const CalendarIcon = styled(CalendarDays)(({ theme }) => ({
  color: theme.palette.color.green,
  strokeWidth: '1px',
}))

export const ClockIcon = styled(Clock)(({ theme }) => ({
  color: theme.palette.color.green,
  strokeWidth: '1px',
}))

export const LocationIcon = styled(LandPlot)(({ theme }) => ({
  color: theme.palette.color.green,
  strokeWidth: '1px',
}))

export const Booking = styled(Button)(({ theme }) => ({
  display: 'flex',
  color: 'white',
  fontFamily: theme.typography.k2d,
  fontSize: '1.4vw',
  padding: '10px 20px',
  border: `1.5px solid ${theme.palette.color.green}`,
  borderRadius: '5px',
  textTransform: 'none',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  justifyContent: 'center',

  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '18%',
    left: '50%',
    width: '50%',
    height: '2px',
    backgroundColor: theme.palette.color.green,
    transform: 'translateX(-50%) scaleX(0)',
    transition: 'transform 0.3s ease',
    transformOrigin: 'center',
  },

  '&:hover::after': {
    transform: 'translateX(-50%) scaleX(1)',
  },
}))
