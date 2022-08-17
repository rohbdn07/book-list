import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import styled from '@emotion/styled'

import HeaderEl from '../headers/HeaderEl'
import AvatarEl from '../avatar/AvatarEl'
import ListItemEl from './ListItemEl'
import { booksListData } from '../../data/BookData'

// styles
const ListContainer = styled('div')({
  maxHeight: '600px',
  overflowY: 'scroll',
  cursor: 'pointer',
})

// get inital letter of a string
function stringAvatar(name: string) {
  return `${name.trim().split(' ')[0][0]}`
}

/**
 * @description this component displays list of book items
 * @returns JSX.Element
 */
const BookItemsList = () => {
  return (
    <List sx={{ width: '100%', maxWidth: 400 }}>
      <HeaderEl text={'Book lists'} />
      <ListContainer>
        {booksListData?.map((book, index) => (
          <>
            <ListItem alignItems='flex-start' key={`${book.title}+ ${index}`}>
              <AvatarEl text={stringAvatar(`${book?.title}`) as string} />
              <ListItemEl
                title={book?.title}
                author={book?.author}
                description={book?.description}
              />
            </ListItem>
            <Divider />
          </>
        ))}
      </ListContainer>
    </List>
  )
}

export default BookItemsList
