import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

/**
 * @description this component is uses as nav bar
 * @returns JSX Elements
 */
const NavBar = (): JSX.Element => {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            position: 'relative',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: 'inherit',
            margin: '10px ',
            padding: '10px',
          }}
        >
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
          >
            Book-List
          </Typography>
        </Box>
      </Container>
    </AppBar>
  )
}
export default NavBar
