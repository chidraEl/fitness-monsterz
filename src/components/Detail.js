import React from 'react'
import {Typography, Stack} from '@mui/material'

import BodyPartImg from '../assets/icons/body-part.png'
import Target from '../assets/icons/target.png'
import Equipment from '../assets/icons/equipment.png'

import LoadingPanel from './LoadingPanel'

function Detail({exerciseDetail}) {
  const {bodyPart,gifUrl,name,target,equipment} = exerciseDetail
  const exerciseExtras = [
    {
      icon:BodyPartImg,
      name:bodyPart
    },
    {
      icon:Target,
      name:target
    },
    {
      icon:Equipment,
      name:equipment
    }
  ]

  return (
    <Stack >
      { name ? (
        <Stack gap='40px' sx={{flexDirection: {md:'row'}, p:'30px',alignItems:'center'}}>
          <img src={gifUrl}
            alt={name}
            loading='lazy'
            style={{borderRadius:30,boxShadow:'0 0 12px rgba(0,0,0,.02)'}}
            />

        <Stack>
          <Typography fontSize='32px'
            fontWeight='700'
            textTransform='capitalize'
            mb='20px'
          >{name}</Typography>
          <Typography textTransform='capitalize' fontSize='17px'>
            {name} is a great exercise to practive if you are looking to build a strong {bodyPart}, using only your {equipment}.
          </Typography>
          
          {exerciseExtras.map( (item,index) => (
            <Stack key={index} gap='15px' mt='40px' direction='row'>
              <img src={item.icon} alt={item.name} width='40px' height='40px'/>
              <Typography style={{display:'flex',flexDirection:'column'}}     
                  justifyContent='center'
                  fontSize='18px'
                  textTransform='Capitalize'
                  fontWeight='500'
                  >{item.name}</Typography>
            </Stack>
          ))}

        </Stack>
      </Stack>
      ) : 
        <LoadingPanel/>
    }
    </Stack>
  )
}

export default Detail