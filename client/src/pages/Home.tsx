import { styled } from '@mui/material'
import React from 'react'

import InputForm from '../components/form/InputForm'
import BookItemsList from '../components/lists/BookList'

// styles...
const HomeContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  paddingTop: '20px',
})

/**
 *@description home page component render all components located in home page.
 * @returns JSX.Element components
 */
const Home = () => {
  return (
    <>
      <HomeContainer>
        <InputForm />
        <BookItemsList />
      </HomeContainer>
    </>
  )
}

export default Home
