import AppRoutes from './routers'
import { BrowserRouter } from 'react-router-dom'

import NavBar from './components/navbar/NavBar'
import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <header className='App-header'>
            <NavBar />
          </header>
          <div className='app__container'>
            <AppRoutes />
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
