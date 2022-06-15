import React from 'react'
import {Box, Stack, Typography} from '@mui/material'

import LoadingPanel from './LoadingPanel'

function ExerciseVideos( {exerciseVideos, name}) {
  if(!exerciseVideos.length) return  <LoadingPanel/>

  return (
    <Box sx={{ marginTop:{lg: '100px', xs:'20px'}}} p='20px'>
      <Typography variant='h5'
          mb='15px'
          fontWeight='600'
          textTransform='capitalize'>Videos for {name}</Typography>

      <Stack direction='row'
        justifyContent='flex-start'
        flexWrap='wrap'
        alignItems='start'
        sx={{
          flexDirection:{ lg: 'row' },
          gap: {lg: '110px', xs:'5px'}
        }}
      >
        {exerciseVideos?.slice(0,3).map( (item,index) =>(
          <a key={index}
              className='exercise-video'
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target='_blank'  
              rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url}
                alt={item.video.title}/>
            <Stack direction='row' justifyContent='space-between' p='10px' color='black'>
              <Typography fontSize='17px'fontWeight='600'>
                {item.video.title}
              </Typography>
              <Typography fontSize='14px' >
                {item.video.lengthText}
              </Typography>

            </Stack>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos