import { Typography } from '@mui/material'
import React from 'react'

type HeaderPropsType = {
  text: string
}

/**
 *
 * @param props header props types and its value
 * @returns
 */
const HeaderEl = (props: HeaderPropsType) => {
  return (
    <>
      <Typography>{props.text}</Typography>
    </>
  )
}

export default HeaderEl
