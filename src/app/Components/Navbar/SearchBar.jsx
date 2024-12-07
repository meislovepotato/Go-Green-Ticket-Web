'use client'

import { Box, InputAdornment, InputBase, styled } from '@mui/material'
import { FiSearch } from 'react-icons/fi'

const SearchBarContainer = styled(Box)(({ theme }) => ({
  width: '260px',
  height: '70px',
  position: 'relative',
  padding: '8px 16px 8px 12px',
  borderRadius: '10px',
  border: `1px solid ${theme.palette.color.green}`,
  backgroundColor: theme.palette.color.black,
  display: 'flex',
  alignItems: 'center',
  marginLeft: '50px',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  flexGrow: 1,
  '& input::placeholder': {
    color: 'white',
    opacity: 5,
    fontWeight: '350',
    fontFamily: theme.typography.inter,
  },
}))

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <StyledInputBase
        placeholder='Search'
        startAdornment={
          <InputAdornment position='start'>
            <FiSearch size={24} style={{ color: 'white' }} />
          </InputAdornment>
        }
      />
    </SearchBarContainer>
  )
}

export default SearchBar
