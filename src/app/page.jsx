'use client'

import { Box, styled } from '@mui/material'

import { TopHeader, Navbar, MainPage, MoviesPage, Faq } from '@/app/Components'

const StyledPage = styled(Box)(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.color.black,
}))

export default function Home() {
  return (
    <StyledPage>
      <TopHeader />
      <Navbar />
      <MainPage />
      <MoviesPage />
      <Faq />
    </StyledPage>
  )
}
