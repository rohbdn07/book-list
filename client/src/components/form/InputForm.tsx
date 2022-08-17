import styled from '@emotion/styled'
import { TextareaAutosize, TextField } from '@mui/material'
import React from 'react'

import ButtonGroupEl from '../buttons/ButtonGroup'
import HeaderEl from '../headers/HeaderEl'

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
const InputForm = () => {
  const [inputs, setInputs] = React.useState({
    title: '',
    author: '',
    description: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name
    const value = event.target.value

    setInputs((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = () => {
    const obj = {
      title: inputs.title,
      author: inputs.author,
      description: inputs.description,
    }
    console.log(obj)
  }
  return (
    <>
      <FormContainer>
        <HeaderEl text={'Book details'} />
        <FieldContainer>
          <TextField
            id='outlined-basic'
            label='Title'
            name='title'
            variant='outlined'
            value={inputs.title}
            onChange={handleChange}
          />
          <TextField
            id='outlined-basic'
            label='Author'
            name='author'
            variant='outlined'
            value={inputs.author}
            onChange={handleChange}
          />
          <TextareaAutosize
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
        <ButtonGroupEl submit={handleSubmit} />
      </FormContainer>
    </>
  )
}

export default InputForm
