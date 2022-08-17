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

/**
 * @description it shows group of buttons
 * @returns JSX Element
 */
const ButtonGroupEl = ({ submit }: any) => {
  return (
    <ButtonGroup aria-label='button group'>
      <Container>
        <ButtonEl text={'Save new'} submit={submit} />
        <ButtonEl text={'Save'} />
        <ButtonEl text={'delete'} color={'red'} />
      </Container>
    </ButtonGroup>
  )
}

export default ButtonGroupEl
