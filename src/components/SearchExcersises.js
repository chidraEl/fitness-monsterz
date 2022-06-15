import React, {useEffect, useState} from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import {exerciseOptions, fetchData} from '../utils/fetchData'
import HorizontalScrollbar from '../components/HorizontalScrollbar'
import LoadingPanel from './LoadingPanel';


function SearchExcersises({setExercises, bodyPart, setBodyPart}) {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect( () => {
    const fetchExercicesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setBodyParts(['all', ...bodyPartsData])
    }

    fetchExercicesData()
  }, [])


  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      const searchedExercises = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch('')
      setExercises(searchedExercises)
      
      window.scrollTo({
        top:document.querySelector('#exercises').offsetTop,
        behavior:'smooth'
    })
    }
  }

  return (
    <Stack>
      {bodyParts.length ? (
      <Stack alignItems="center" mt="37px"
      justifyContent="center" p="20px">
        <Typography fontWeight={700}
          sx={{ fontSize:{lg: '44px', xs:'30px'} }}
          mb="50px" textAlign="center"
        >Find the best exercises<br/>
        Let's get fit together</Typography>
      
        <Stack direction='row'>
          <TextField 
            height="75px"
            value={search}
            placeholder="Chest, abs, shoulder..."
            type="text"
            onChange={ (e) => {setSearch(e.target.value.toLowerCase())}}
            label='Search Exercises'
            sx={{
              input:{
                fontWeight:'500',
                fontSize:'22px',
                borderRadius: '12px 0  0  12px !important'
              },
              width:{
                lg:'700px', xs:'80%'
              },              
            }}
          />
          <Button
            className='searchBtn'
            variant='contained'
            color='error'
            sx={{
              fontSize:'20px',
              fontWeight:'600'
            }}
            onClick={handleSearch}><SearchIcon fontSize='large'/></Button>
        </Stack>

        <Box sx={{ position:'relative', width:'100%', p: '20px'}}>
          <HorizontalScrollbar
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            isBodyPart={true}
            />
        </Box>
      </Stack>
      ) : <LoadingPanel/>}
    </Stack>
  )
}

export default SearchExcersises