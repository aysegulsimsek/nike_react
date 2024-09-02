import React from 'react'
import Drawer from '@mui/material/Drawer';
const Drawer = ({open}) => {
  return (
      <Drawer  anchor={open}
      open={state[anchor]}
      onClose={toggleDrawer(open, false)}>
          list item
   </Drawer>
  )
}

export default Drawer
