import React, {useState} from 'react'
import {Drawer, IconButton} from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'

const AboutUs = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () =>  {
    setOpen(true)
  }
  const handleClose =( ) => {
    setOpen(false) 
  }
  return (
    <div>
      <IconButton onClick={() =>  {handleOpen()}}>
        <InfoIcon/>About Us
      </IconButton>
      <Drawer open={open} variant='persistent'>
        <IconButton onClick={()=> {handleClose()}}>
          <ArrowBackIos/>Back
        </IconButton>
        This app is by the homies
      </Drawer>
    </div>
  )
}

export default AboutUs