'use client'
import { Box, styled } from '@mui/material'

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '600px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '50px',
  color: 'white',
  gap: 20,
  fontFamily: theme.typography.inter,
}))

const AboutGGT = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '10px',
  color: 'white',
  gap: 20,
  fontFamily: theme.typography.inter,
}))

const FaqBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '20px 50px',
  color: 'white',
  gap: 20,
  fontFamily: theme.typography.inter,
  border: '1px solid white',
  borderRadius: '6px',
}))

const AboutTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '45px',
  width: '350px',
  justifyContent: 'center',
  alignItems: 'center',
  border: `1px solid ${theme.palette.color.green}`,
  fontFamily: theme.typography.k2d,
  color: 'white',
  padding: '8px 10px',
}))

const FaqTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '45px',
  width: '350px',
  justifyContent: 'center',
  alignItems: 'center',
  border: `1px solid ${theme.palette.color.green}`,
  fontFamily: theme.typography.k2d,
  color: 'white',
  padding: '8px 10px',
}))

const Faq = () => {
  return (
    <Container>
      <AboutGGT>
        <AboutTitle>ABOUT GO GREEN TICKET</AboutTitle>
        GO GREEN
      </AboutGGT>
      <FaqBox>
        <FaqTitle>FREQUENTLY ASKED QUESTIONS</FaqTitle> BUY TICKET ONLINE
      </FaqBox>
    </Container>
  )
}
export default Faq
