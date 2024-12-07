'use client'

// External imports
import { Box, styled, Typography } from '@mui/material'

/** Styled Components */

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.color.black,
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: '40px',
  paddingRight: theme.spacing(10),
}))

const GreenText = styled(Typography)(({ theme }) => ({
  fontSize: 22,
  fontFamily: theme.typography.luckiestGuy,
  color: theme.palette.color.green,
}))

const WhiteText = styled(Typography)(({ theme }) => ({
  fontSize: 22,
  fontFamily: theme.typography.luckiestGuy,
  color: 'white',
}))

/** Main Components */
const TopHeader = () => {
  return (
    <Container>
      <GreenText>GO GREEN</GreenText>
      <WhiteText>, BUY TICKET ONLINE</WhiteText>
    </Container>
  )
}

export default TopHeader
