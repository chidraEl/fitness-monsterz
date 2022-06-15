import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import  HeroBannerImg from '../assets/images/3757943.jpg'

function HeroBanner() {
  return (
    <Box sx={{
      mt: { lg: '212px', xs:'70px'},
      ml: { sm: '50px'}
    }} position='relative' p='20px'>
      <Stack sx={{
        textAlign:{lg:'left', xs:'center'}}}
        >
        <Typography color='#FF2625'
                    fontWeight='600'
                    fontSize='26px'
        >Fitness Club</Typography>

        <Typography fontWeight={700}
                  lineHeight='42px' sx={{
          fontSize: {lg: '44px', xs: '40px'}
        }} mt="20px" mb="20px">
          Get Sweaty,<br/>Get fit
        </Typography>

        <Typography fontSize='22px' lineHeight='35px' mt={3} mb={3}>
          Get the best exercises to get fit all in one place
        </Typography>
        <Button variant="outlined"
                color="error"
                href='#exercises'
                sx={{width:{lg:'180px', xs:'200px'},margin:{lg:'0',xs:'auto'}}}
        >Explore Exercises</Button>
      </Stack>

      <Typography 
        fontWeight={600}
        fontSize="140px"
        color="#777"
        sx={{
          opacity: .1,
          display: {lg: 'block', xs: 'none'}
        }}>EXERCISE</Typography>
      
      <img src={HeroBannerImg} alt="Banner" className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner