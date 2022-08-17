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
  return (
    <>
      <FormContainer>
        <HeaderEl text={'Book details'} />
        <FieldContainer>
          <TextField id='outlined-basic' label='Title' variant='outlined' />
          <TextField id='outlined-basic' label='Author' variant='outlined' />
          <TextareaAutosize
            aria-label='minimum height'
            minRows={3}
            placeholder='Book description'
            style={{
              maxWidth: '445px',
              minWidth: '420px',
              backgroundColor: 'transparent',
            }}
          />
        </FieldContainer>
        <ButtonGroupEl />
      </FormContainer>
    </>
  )
}

export default InputForm
