import AppRoutes from './routers'
import { BrowserRouter } from 'react-router-dom'

import NavBar from './components/navbar/NavBar'
import './App.css'
import { Box, Container } from '@mui/material'

/**
 * @description first main component that render the other components
 * @returns JSX.Element
 */
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <NavBar />
          <Container>
            <Box sx={{ bgcolor: '#e5e5e5', height: 'auto', marginTop: '20px' }}>
              <AppRoutes />
            </Box>
          </Container>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
