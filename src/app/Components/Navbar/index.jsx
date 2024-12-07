'use client'

import { Typography, Box, styled } from '@mui/material'

import { GoGreenTicketLogo } from '@/components/images'
import theme from '@/app/theme'
import SearchBar from './SearchBar'

const StyledAppBar = styled(Box)({
  display: 'flex',
  width: '100%',
  height: '110px',
  alignItems: 'center',
  padding: ' 0 25px 0 25px',
  backgroundColor: theme.palette.color.grey,
  position: 'sticky',
  top: 0,
  zIndex: 10,
})

const LogoBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
})

const MenuBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexGrow: 1,
  gap: 50,
})

const MenuItemTypography = styled(Typography)({
  color: 'white',
  cursor: 'pointer',
  fontSize: '20px',
  fontFamily: theme.typography.k2d,
})

const menuItems = [
  { text: 'Home', onClick: () => console.log('Home clicked') },
  { text: 'Latest', onClick: () => console.log('Latest clicked') },
  { text: 'About', onClick: () => console.log('About clicked') },
  { text: 'Help', onClick: () => console.log('Help clicked') },
]

const Navbar = () => {
  return (
    <StyledAppBar>
      <LogoBox>
        <GoGreenTicketLogo width={170} height={80} />
      </LogoBox>

      <MenuBox>
        {menuItems.map(({ text, onClick }) => (
          <MenuItemTypography key={text} onClick={onClick}>
            {text}
          </MenuItemTypography>
        ))}
      </MenuBox>

      <SearchBar />
    </StyledAppBar>
  )
}

export default Navbar
