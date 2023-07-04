import React from 'react'
import { TextField, InputAdornment } from '@mui/material'
import locationIcon from '../img/location.svg'
import MyButton from './MyButton'
import rightArrowSm from '../img/right-arrow-sml.png'

function SearchBar() {
  return (
    <div>
        <TextField
        fullWidth
        id="outlined-search"
        label="Search for the location you want!"
        type="search"
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={locationIcon} alt="!" />
              </InputAdornment>
            ),
            endAdornment: (
                <InputAdornment position="end">
                    <MyButton value="Search" color='dark-green' align='right' icon={rightArrowSm} />
                </InputAdornment>
            )
          }}
        />
    </div>
  )
}

export default SearchBar