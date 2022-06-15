import React from 'react'
import {Link} from 'react-router-dom'
import {Stack,Typography, Button} from '@mui/material'

function ExerciseCard({exercise}) {
  return (
    <Link to={`/exercise/${exercise.id}`} className='exercise-card-container'>
      <Stack className='exercise-card'>
        
        <Stack direction='row' gap='5px' justifyContent='center'>
          <Button variant='outlined'
              color='secondary'
              style={{borderRadius:'10px'}}
              size='small'>{exercise.target}</Button>
          <Button variant='outlined'
              size='small'
              color='primary'
              style={{borderRadius:'10px'}}>{exercise.bodyPart}</Button>
        </Stack>

        <img src={exercise.gifUrl}
          alt={exercise.name}
          m='20px'
          loading='lazy'/>
        <Typography color='#666'
            fontWeight='600'
            textTransform='capitalize'
            lineHeight='28px'
            fontSize='16px'
            mt='10px'
            textAlign='center'>
              {exercise.name}
        </Typography>
      </Stack>
      

    </Link>
  )
}

export default ExerciseCard