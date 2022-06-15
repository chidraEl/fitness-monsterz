import React, { useContext } from 'react'
import {Box, Typography} from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import BodyPart from './BodyPart'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ExerciseCard from './ExerciseCard'

const LeftArrow = () => {
    const {scrollPrev} = useContext(VisibilityContext);
    return (
        <Typography onClick={() => scrollPrev()}
            className='right-arrow'>
                <ArrowCircleLeftIcon alt='Previous'/>
            </Typography>
    )
}
const RightArrow = () => {
    const {scrollNext} = useContext(VisibilityContext)
    return (
        <Typography onClick={()=> scrollNext()}
            className='left-arrow'>
                <ArrowCircleRightIcon alt='Next'/>
        </Typography>
    )
}



function HorizontalScrollbar({data, bodyPart, setBodyPart,isBodyPart}) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map( (item) => (
            <Box
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m="12px"
            >
                {isBodyPart ?
                <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
                :  <ExerciseCard exercise={item}/>
                }
            </Box>
        ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar