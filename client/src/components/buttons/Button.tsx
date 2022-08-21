import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
// import { styled } from '@mui/system'

type ButtonProps = {
  text: string
  color?: string
  submit?: (e: React.MouseEvent<HTMLButtonElement>) => void
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
        onClick={(e) => props.submit && props?.submit(e)}
      >
        {props.text}
      </Button>
    </Stack>
  )
}

export default ButtonEl
