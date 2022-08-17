import React from 'react'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

type ListItemElProps = {
  title: string
  author: string
  description: string
}

/**
 *
 * @param title
 * @param author
 * @param description
 * @returns JSX.Element list item
 */
const ListItemEl = ({ title, author, description }: ListItemElProps) => {
  return (
    <>
      <ListItemText
        primary={title}
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component='span'
              variant='body2'
              color='text.primary'
            >
              {author}
            </Typography>
            {`${description.substring(0, 20)}...`}
          </>
        }
      />
    </>
  )
}

export default ListItemEl
