import React from 'react'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

type ListItemElProps = {
  id?: string
  title: string
  author: string
  description: string
}

/** display items of list*/
function DisplayItems({ author, description }: Pick<ListItemElProps, 'author' | 'description'>) {
  return (
    <>
      <Typography
        sx={{ display: 'inline-flex', paddingRight: '10px' }}
        component='span'
        variant='body2'
        color='text.primary'
      >
        {author}
      </Typography>
      {`${description.substring(0, 20)}...`}
    </>
  )
}

/**
 *
 * @param title
 * @param author
 * @param description
 * @returns JSX.Element list item
 */
const ListItemEl = ({ id, title, author, description, handleClick }: ListItemElProps | any) => {
  // console.log('the id is', id)
  function update() {
    return handleClick(id, title, author, description)
  }
  return (
    <>
      <ListItemText
        onClick={update}
        primary={title}
        secondary={
          <>
            <DisplayItems author={author} description={description} />
          </>
        }
      />
    </>
  )
}

export default ListItemEl
