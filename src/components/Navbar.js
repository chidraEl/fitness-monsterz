import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Stack} from '@mui/material'
import Logo from '../assets/images/Logo.png'
// For the menu list
import {List,ListItemButton,ListItemText,Collapse} from '@mui/material'
import {ExpandMore, ExpandLess} from '@mui/icons-material'
// FetchData
import {fetchData,exerciseOptions} from '../utils/fetchData'


function Navbar( {setBodyPart}) {
  const [open,setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }

  const [menuBodyParts,setMenuBodyParts] = useState([])
  useEffect(()=>{
    const fetchBodyParts = async () => {
      const data = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setMenuBodyParts(['all', ...data])
    }
    fetchBodyParts()
  },[])

  return (
    <Stack direction="row"
      justifyContent="space-start"
      px='20px'
      sx={{
        gap:{ sm: '122px', xs: '40px' },
        mt: { sm:'32px', xs: '40px' }
      }}>
            
      <Link to='/'>
        <img src={Logo} alt='Logo' style={{
          width: '48px',height: '48px',margin: '0 20px'
        }} />
      </Link>

      <Stack direction="row"
        gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to='/' style={{
          textDecoration:'none',
          color:'#3A1212',
          background:'#fdfdfd',
          padding:'25px'
        }}>Home</Link>
        { setBodyPart &&
          <List sx={{ width: '100%', maxWidth:360, background:'#fdfdfd'}}
            component='nav'
            aria-labelledby='nested-list-subheader'>
              <ListItemButton onClick={handleClick}>
                <ListItemText primaryTypographyProps={{fontSize:24}} primary='Exercises'/>
                {open ? <ExpandLess/> : <ExpandMore/>}
              </ListItemButton>
              <Collapse in={open} timeout='auto' unmountOnExit >
                <List component='div'  sx={{
                      position:'absolute',
                      zIndex:111,
                      background:'#fff',
                      width:'100%',
                      boxShadow:'2px 2px 8px rgba(0,0,0,.07)'
                      }}>
                  {menuBodyParts.map( (item,index) => (
                    <ListItemButton sx={{pl:4}} key={index}
                      onClick={()=>{
                        setBodyPart(item)
                        window.scrollTo({
                          top:document.querySelector('#exercises').offsetTop,
                          behavior:'smooth'
                        })
                        handleClick()
                      }}
                    >
                      <ListItemText primary={item}/>
                    </ListItemButton>
                  ))}
                
                </List>
              </Collapse>
          </List>
        }
      </Stack>
    </Stack>
  )
}

export default Navbar