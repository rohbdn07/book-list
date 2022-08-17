import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

// styles...
const boxStyle = {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  justifyContent: 'space-between',
  fontFamily: 'monospace',
  color: 'inherit',
  margin: '10px ',
  padding: '10px',
}

const textStyle = {
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
  textTransform: 'uppercase',
}

/**
 * @description this component is uses as nav bar
 * @returns JSX Elements
 */
const NavBar = (): JSX.Element => {
  return (
    <AppBar position='static'>
      <Container fixed>
        <Box sx={boxStyle}>
          <Typography variant='h6' noWrap component='a' href='/' sx={textStyle}>
            Book-List
          </Typography>
        </Box>
      </Container>
    </AppBar>
  )
}
export default NavBar
