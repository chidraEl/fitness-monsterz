import React from 'react'
import {Box,Stack,Typography} from '@mui/material'

import LoadingPanel from './LoadingPanel'
import HorizontalScrollbar from './HorizontalScrollbar'


function SimilarExercises( {similarExercises,bodyPart}) {
  return (
    <Box sx={{ marginTop:{md: '100px', xs:'20px'}}} p='20px' m='30px 0'>
      {similarExercises.length ? (
      <Stack id='exercises'>
        <Typography variant='h5'  mb='15px' fontWeight='600'
          textTransform='capitalize'>Similar Exercises for the {bodyPart}</Typography>
          <Stack direction='row' sx={{position:'relative'}}>
            <HorizontalScrollbar data={similarExercises.splice(0,9)}
            isBodyPart={false}/>
          </Stack>
        </Stack>
      ) : <LoadingPanel/>}
    </Box>
  )
}

export default SimilarExercises