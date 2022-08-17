import { Avatar, ListItemAvatar } from '@mui/material'
import React from 'react'

type AvatarProps = {
  text: string
}

const AvatarEl = ({ text }: AvatarProps) => {
  return (
    <>
      <ListItemAvatar>
        <Avatar>{text}</Avatar>
      </ListItemAvatar>
    </>
  )
}

export default AvatarEl
