import * as React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import ButtonEl from './Button'
import { styled } from '@mui/system'

// styles...
const Container = styled('div')({
  display: 'flex',
  gap: 3,
  marginTop: '10px',
})

interface ButtonGroupProps {
  createNewSubmit: (e: any) => void
  updateSubmit: (e: any) => void
  deleteSubmit: (e: any) => void
}

/**
 * @description it shows group of buttons
 * @returns JSX Element
 */
const ButtonGroupEl = ({ createNewSubmit, updateSubmit, deleteSubmit }: ButtonGroupProps) => {
  return (
    <ButtonGroup aria-label='button group'>
      <Container>
        <ButtonEl text={'Save new'} submit={createNewSubmit} />
        <ButtonEl text={'Save'} submit={updateSubmit} />
        <ButtonEl text={'delete'} submit={deleteSubmit} color={'red'} />
      </Container>
    </ButtonGroup>
  )
}

export default ButtonGroupEl
