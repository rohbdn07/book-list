import { styled } from '@mui/material'
import React from 'react'

import InputForm from '../components/form/InputForm'
import BookItemsList from '../components/lists/BookList'
import axiosService from '../services/axios'

export interface IBookData {
  status?: boolean
  data?: Book[]
}

export type Book = {
  _id: string
  title: string
  author: string
  description: string
}

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
  const [data, setData] = React.useState<IBookData>()
  const [stateChange, setStateChange] = React.useState(false)
  const [update, setUpdate] = React.useState({
    id: '',
    title: '',
    author: '',
    description: '',
  })

  /** useEffect to call axios API service */
  React.useEffect(() => {
    callApi()
  }, [stateChange])

  // call axios services to fetch data
  const callApi = async () => {
    try {
      const response = await axiosService.getBookList()
      const data = await response.data
      if (data.status === true) {
        setData(data)
      }
    } catch (error) {
      console.log('Error while fetching..', error)
    }
  }

  function handleClick(id: string, title: string, author: string, description: string) {
    setUpdate({
      id,
      title,
      author,
      description,
    })
  }
  return (
    <>
      <HomeContainer>
        <InputForm setStateChange={setStateChange} update={update} />
        <BookItemsList {...data} handleClick={handleClick} />
      </HomeContainer>
    </>
  )
}

export default Home
