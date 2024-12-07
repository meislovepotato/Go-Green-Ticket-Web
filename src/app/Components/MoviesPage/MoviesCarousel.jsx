import { Box } from '@mui/material'
import { useRef } from 'react'
import { CalendarDays, HandCoins, LandPlot } from 'lucide-react'

import {
  CarouselContainer,
  MoviesWrapper,
  MovieBox,
  MoviePicture,
  MovieTitle,
  MovieDetailsTop,
  MovieDetailsBottom,
  ArrowContainer,
  NextArrowContainer,
  PrevArrowContainer,
  NextArrow,
  PrevArrow,
  Calendar,
  Price,
  Location,
  Booking,
} from './CarouselStyles'

const MoviesCarousel = ({ genre }) => {
  const wrapperRef = useRef(null)
  const movieWidth = 300

  const handleNext = () => {
    if (wrapperRef.current) {
      const maxScrollLeft = wrapperRef.current.scrollWidth - wrapperRef.current.clientWidth
      const newScrollLeft = Math.min(wrapperRef.current.scrollLeft + movieWidth, maxScrollLeft)
      wrapperRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' })
    }
  }

  const handlePrev = () => {
    if (wrapperRef.current) {
      const newScrollLeft = Math.max(wrapperRef.current.scrollLeft - movieWidth, 0)
      wrapperRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' })
    }
  }

  return (
    <Box position='relative' width='100%'>
      <CarouselContainer>
        <MoviesWrapper ref={wrapperRef}>
          {genre.map((movie, index) => (
            <MovieBox key={index}>
              <MoviePicture />
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieDetailsTop>
                <Location>
                  <LandPlot size={30} />
                </Location>
                <Calendar>
                  <CalendarDays size={30} />
                </Calendar>
              </MovieDetailsTop>
              <MovieDetailsBottom>
                <Price>
                  <HandCoins size={30} />
                </Price>
                <Booking>Book</Booking>
              </MovieDetailsBottom>
            </MovieBox>
          ))}
        </MoviesWrapper>
        <ArrowContainer>
          <PrevArrowContainer>
            <PrevArrow onClick={handlePrev} />
          </PrevArrowContainer>
          <NextArrowContainer>
            <NextArrow onClick={handleNext} />
          </NextArrowContainer>
        </ArrowContainer>
      </CarouselContainer>
    </Box>
  )
}

export default MoviesCarousel
