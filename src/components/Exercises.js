import React, {useState, useEffect} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box, Stack, Typography} from '@mui/material'

import {exerciseOptions, fetchData} from '../utils/fetchData'
import ExerciseCard from './ExerciseCard';
import LoadingPanel from './LoadingPanel'

function Exercises({exercises, setExercises, bodyPart}) {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9
  const [term,setTerm] = useState('You')
  
  const indexOfLastExercise = currentPage*exercisesPerPage
  const indexOfFirstExcercise = indexOfLastExercise-exercisesPerPage
  const currentExercises = exercises.slice(indexOfFirstExcercise, indexOfLastExercise)

  const paginate = (e,value) => {
    setCurrentPage(value)
    window.scrollTo({
      top: document.querySelector('#exercises').offsetTop,
      behavior: 'smooth'
    })
  }

  useEffect( () => {
    const fetchExercisesData = async() => {
      let exercisesData = []
      if(bodyPart === 'all'){
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
      }else{
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
      }
      
      setExercises(exercisesData)
      setTerm(bodyPart==='all'?'You':bodyPart)
    }
    fetchExercisesData()
  }, [bodyPart])

  return (
    <Box id='exercises'
        sx={{ mt: { lg: '110px'}}}
        mt='50px'
        p='12px'
    >
      { currentExercises.length ? (
      <Stack>
        <Typography variant='h4' ml='30px' mb='64px'>Exercises For {term}</Typography>
      
        <Stack direction='row'
          sx={{ gap:{lg:'80px', xs:'30px'}}}
          flexWrap='wrap' 
          justifyContent='center'
        >
          {currentExercises.map( (exercise, index) => (
            <ExerciseCard key={index} exercise={exercise}/>
          ))}
        </Stack>

        <Stack mt='150px' alignItems='center'>
            {exercises.length > 9 && (
              <Pagination
                color='primary'
                size="large"
                variant='outlined'
                defaultPage={1}
                count={Math.ceil(exercises.length / exercisesPerPage)}
                page={currentPage}
                onChange={paginate}
              />
            )}
        </Stack>
      </Stack>
      ) : <LoadingPanel/> }
    </Box>
  )
}

export default Exercises