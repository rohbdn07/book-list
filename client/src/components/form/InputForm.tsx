import React from 'react'
import styled from '@emotion/styled'
import { TextareaAutosize, TextField } from '@mui/material'

import axiosService from '../../services/axios'
import AlertMessage from '../alert/AlertMessage'
import ButtonGroupEl from '../buttons/ButtonGroup'
import HeaderEl from '../headers/HeaderEl'

interface FormDataType {
  title: string
  author: string
  description: string
}

// styles...
const FormContainer = styled('div')({
  display: 'block',
  marginTop: '10px',
  marginBottom: '20px',
  width: '450px',
})

const FieldContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #000000',
  borderRadius: '5px',
  marginTop: '20px',
  width: '100%',
  height: 'auto',
  padding: '5px',
  marginBottom: '10px',
  '& > :not(style)': { width: '100%', marginBlockEnd: '20px' },
})

/**
 * @description it shows input form
 * @returns JSX.Element
 */
const InputForm = (props: any) => {
  const { update, setStateChange } = props
  const idOfBook = update.id

  const [inputs, setInputs] = React.useState<FormDataType>({
    title: '',
    author: '',
    description: '',
  })
  const [isError, setIsError] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [responseMessage, setResponseMessage] = React.useState('')

  /** useEffect() to change state to updated form */
  React.useEffect(() => {
    setInputs({
      title: update.title,
      author: update.author,
      description: update.description,
    })
  }, [update])

  /** onChange handler for input form */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name
    const value = event.target.value

    setInputs((values) => ({ ...values, [name]: value }))
  }

  /** call an action either update or create a book depends on axios service */
  async function updateORcreate(axiosService: any, text: string) {
    const obj = {
      id: update.id,
      title: inputs.title,
      author: inputs.author,
      description: inputs.description,
    }
    try {
      // call axios api service to update OR create a book
      const response = await axiosService(obj)
      if (response.data.status === true) {
        setStateChange((prevState: boolean) => !prevState)
        setIsError(false)
        setInputs({
          title: '',
          author: '',
          description: '',
        })
        setOpen(true)
        setResponseMessage(text)
        return
      } else {
        setStateChange(false)
        console.log(response)
        setIsError(true)
        setOpen(true)
        return response.data?.errors.forEach((err: any) => setResponseMessage(err.message))
      }
    } catch (error) {
      console.log('Error', error)
    }
  }

  /** call an api axios service to delete a book */
  async function deleteTheBook(axiosService: any, id: string, text: string) {
    try {
      console.log('the iddddddd', id)
      const response = await axiosService(id)
      if (response.data.status === true) {
        setStateChange((prevState: boolean) => !prevState)
        setIsError(false)
        setInputs({
          title: '',
          author: '',
          description: '',
        })
        setOpen(true)
        setResponseMessage(text)
        return
      } else {
        setStateChange(false)
        console.log(response)
        setIsError(true)
        setOpen(true)
        return response.data?.errors.forEach((err: any) => setResponseMessage(err.message))
      }
    } catch (error) {
      console.log('Error', error)
    }
  }

  /** createNewSubmit() to call api axios service in order to create a new book */
  const createNewSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const text = 'Succefully Created a new book.'
    await updateORcreate(axiosService.createBook, text)
  }

  /** updateSubmit() to call api axios service in order to update the book */
  const updateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const text = 'Succefully Updated the book.'
    await updateORcreate(axiosService.updateBook, text)
  }

  /** deleteSubmit() to call api axios service in order to delete the book */
  const deleteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const text = 'Succefully deleted the book.'
    await deleteTheBook(axiosService.deleteBook, idOfBook, text)
  }

  return (
    <>
      <FormContainer>
        <AlertMessage
          setOpen={setOpen}
          open={open}
          responseMessage={responseMessage}
          isError={isError}
        />

        <HeaderEl text={'Book details'} />
        <FieldContainer>
          <TextField
            id='outlined-required'
            label='Title'
            name='title'
            variant='outlined'
            value={inputs.title}
            onChange={handleChange}
          />
          <TextField
            id='outlined-required'
            label='Author'
            name='author'
            variant='outlined'
            value={inputs.author}
            onChange={handleChange}
          />
          <TextareaAutosize
            id='outlined-required'
            aria-label='minimum height'
            name='description'
            value={inputs.description}
            onChange={handleChange}
            minRows={3}
            placeholder='Book description'
            style={{
              maxWidth: '445px',
              minWidth: '420px',
              backgroundColor: 'transparent',
            }}
          />
        </FieldContainer>
        <ButtonGroupEl
          createNewSubmit={createNewSubmit}
          updateSubmit={updateSubmit}
          deleteSubmit={deleteSubmit}
        />
      </FormContainer>
    </>
  )
}

export default InputForm
