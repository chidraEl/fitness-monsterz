import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'

import {exerciseOptions, youtubeOptions, fetchData} from '../utils/fetchData'

import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import Navbar from '../components/Navbar'

function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const {id} = useParams()
  const [exerciseVideos,setExerciseVideos] = useState([])
  const [similarBodyPartExercises,setSimilarBodyPartExercises] = useState([])

  useEffect( () =>{
    const fetchExerciseData = async() => {

      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
      
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)
      
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      setExerciseVideos(exerciseVideosData.contents)
      
      const similarBodyPartExercisesData = await fetchData(`${exerciseDbUrl}/exercises/bodyPart/${exerciseDetailData.bodyPart}`, exerciseOptions)
      setSimilarBodyPartExercises(similarBodyPartExercisesData)
    }
    fetchExerciseData()
  },[id])
  return (
    <Box sx={{ p:{md: '0 100px', sm:'0 10px'}}}>
      <Navbar setBodyPart={false}/>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises similarExercises={similarBodyPartExercises} bodyPart={exerciseDetail.bodyPart}/>

      
    </Box>
  )
}

export default ExerciseDetail