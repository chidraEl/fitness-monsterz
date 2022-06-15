import React from 'react'
import {Stack, Typography} from '@mui/material'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

function BodyPart({ item, bodyPart, setBodyPart }) {
  return (
    <Stack
        type='Button'
        alignItems='center'
        justifyContent='center'
        className='bodyPart-card'
        sx={{
            backgroundColor: bodyPart === item ? '#252525' : '#fff',
            borderRadius:'40px',
            width:'180px',
            height:'150px',
            gap:'30px',
            cursor: 'pointer'
        }}
        onClick={ () => {
            setBodyPart(item);
            window.scrollTo({
                top:document.querySelector('#exercises').offsetTop,
                behavior:'smooth'
            })
        }}
    >
        <FitnessCenterIcon
            sx={{ 
                fontSize: 45,
                color:'#f76d6d' }}/>
        <Typography sx={{
            fontSize: 20,
            fontWeight: 600,
            textTransform:'capitalize',
            color: bodyPart===item ? '#f76d6d' : '#888'
            }}
        >{item}</Typography>
    </Stack>

  )
}

export default BodyPart