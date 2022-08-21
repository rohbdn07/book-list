import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import styled from '@emotion/styled'

import HeaderEl from '../headers/HeaderEl'
import AvatarEl from '../avatar/AvatarEl'
import ListItemEl from './ListItemEl'
import { Book, IBookData } from '../../pages/Home'

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

/** display list of book items */
function DisplayListItems({ data, handleClick }: IBookData | any) {
  return (
    <ListContainer>
      {data?.map((book: Book, index: number) => (
        <>
          <ListItem alignItems='flex-start' key={`${book.title}+${index}`}>
            <AvatarEl text={stringAvatar(`${book?.title}`) as string} />
            <ListItemEl
              id={book._id}
              title={book?.title}
              author={book?.author}
              description={book?.description}
              handleClick={handleClick}
            />
          </ListItem>
          <Divider />
        </>
      ))}
    </ListContainer>
  )
}

/**
 * @description this component displays list of book items
 * @returns JSX.Element
 */
const BookItemsList = (props: IBookData | any) => {
  const { data, handleClick } = props
  return (
    <List sx={{ width: '100%', maxWidth: 400 }}>
      <HeaderEl text={'Book lists'} />
      <DisplayListItems data={data} handleClick={handleClick} />
    </List>
  )
}

export default BookItemsList
