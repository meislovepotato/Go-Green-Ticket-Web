'use client'
import { useState } from 'react'

import {
  BackgroundImage,
  MainMenuBox,
  MainMenuStyles,
  LatestMenu,
  LatestMovie,
  LatestMovieInfo,
  LatestMovietitle,
  LatestMovieDescription,
  LatestMovieBuy,
  NextArrow,
  CalendarIcon,
  ClockIcon,
  LocationIcon,
  Booking,
} from './styles'

const handleBookingClick = () => {
  console.log('Book')
}

const handleNextClick = () => {
  console.log('Next')
}

const MAIN_MENU_ITEMS = [
  { text: 'Movies' },
  { text: 'Concert' },
  { text: 'Sports' },
  { text: 'Theatre' },
  { text: 'Others' },
]

const MainPage = () => {
  const [isHovered, setIsHovered] = useState(null)
  const [isClicked, setIsClicked] = useState('Movies')

  const handleMouseEnter = (text) => {
    if (text !== isClicked) {
      setIsHovered(text)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(null)
  }

  const handleClick = (text) => () => {
    setIsClicked(text)
  }

  return (
    <BackgroundImage>
      <MainMenuBox>
        {MAIN_MENU_ITEMS.map(({ text }) => (
          <MainMenuStyles
            key={text}
            isHovered={isHovered === text}
            isClicked={isClicked === text}
            onMouseEnter={() => handleMouseEnter(text)}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick(text)}
          >
            {text}
          </MainMenuStyles>
        ))}
      </MainMenuBox>

      <LatestMenu>
        <LatestMovie />
        <LatestMovieInfo>
          <LatestMovietitle>
            INSIDE
            <br /> OUT 2
          </LatestMovietitle>
          <LatestMovieDescription>
            {`Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for
            something entirely unexpected: new Emotions. Joy, Sadness, Anger, Fear and Disgust,
            who've long been running a successful operation by all accounts, aren't sure how to feel
            when Anxiety shows up. And it looks like she's not alone.`}
          </LatestMovieDescription>
        </LatestMovieInfo>
        <LatestMovieBuy>
          <>
            <CalendarIcon size={50} />
            <ClockIcon size={50} />
            <LocationIcon size={50} />
          </>
          <Booking onClick={handleBookingClick}>Book Now</Booking>
        </LatestMovieBuy>
        <NextArrow size={150} onClick={handleNextClick} />
      </LatestMenu>
    </BackgroundImage>
  )
}

export default MainPage
