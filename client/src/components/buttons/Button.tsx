import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
// import { styled } from '@mui/system'

type ButtonProps = {
  text: string
  color?: string
}

/**
 *
 * @param props button props types
 * @returns JSX.Element
 */
const ButtonEl = (props: ButtonProps) => {
  return (
    <Stack spacing={2} direction='row'>
      <Button
        variant='contained'
        sx={{
          bgcolor: props.color ? props.color : 'none',
        }}
      >
        {props.text}
      </Button>
    </Stack>
  )
}

export default ButtonEl
