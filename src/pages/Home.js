import React,{useState} from 'react'
import {Box} from '@mui/material'
import Exercises from '../components/Exercises'
import SearchExcersises from '../components/SearchExcersises'
import HeroBanner from '../components/HeroBanner'
import Navbar from '../components/Navbar'


function Home() {
    const [exercises, setExercises] = useState([])
    const [bodyPart, setBodyPart] = useState('all')

    return (
        <Box sx={{ p:{xl: '0 100px', sm:'0 10px'}}}>
            <Navbar setBodyPart={setBodyPart}/>
            <HeroBanner/>
            <SearchExcersises
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}/>
            <Exercises
                exercises={exercises}
                setExercises={setExercises}
                bodyPart={bodyPart}/>
        </Box>
    )
}

export default Home