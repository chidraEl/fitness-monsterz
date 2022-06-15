import React from 'react'
import {Stack} from '@mui/material'
import {InfinitySpin} from 'react-loader-spinner'

function LoadingPanel() {
  return (
    <Stack  m='5rem 0' p='20px'
        justifyContent='center'
        alignItems='center'>
          <InfinitySpin color='gray'/>
    </Stack>
  )
}

export default LoadingPanel