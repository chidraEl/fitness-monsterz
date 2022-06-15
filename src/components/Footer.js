import React from 'react'
import {Stack, Typography} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
function Footer() {
  return (
    <Stack backgroundColor='#333' p='30px'  direction='row' justifyContent='center'>
      <Typography fontSize='18px' fontWeight='700' color='#eee' mr='5px'>Made with 
      <FavoriteIcon style={{color:'red'}}/>
      </Typography>
      <Typography fontSize='18px' ><a href='https://github.com/chidraEl' target='_blank' rel="noreferrer" style={{color:'#eee',fontWeight:'700'}}>Rachid El khalil</a></Typography>
     
    </Stack>
  )
}

export default Footer