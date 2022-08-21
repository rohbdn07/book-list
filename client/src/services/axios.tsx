import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
/**
 * @axiosFetchAuthAPI baseurl to connect frontend to backend.
 * @baseurl "http://localhost:5050"
 */

const axiosFetchAPI: AxiosInstance & AxiosRequestConfig = axios.create({
  // baseURL: 'http://localhost:5050',
  baseURL: process.env.REACT_APP_HOST || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
})

// call an api endpoint and return response
const getBookList = async () => {
  const response = await axiosFetchAPI.get(`/api/book/all`)
  return response
}

// call an api endpoint and return response
const createBook = async (props: any) => {
  const { title, author, description } = props
  const response = await axiosFetchAPI.post(`/api/book/add`, {
    title,
    author,
    description,
  })
  return response
}

// call an update api endpoint and return response
const updateBook = async (props: any) => {
  const { id, title, author, description } = props
  console.log(id, title)
  const response = await axiosFetchAPI.put(`/api/book/update/${id}`, {
    title,
    author,
    description,
  })
  return response
}

// call an delete api endpoint and return response
const deleteBook = async (id: any) => {
  console.log(id)
  const response = await axiosFetchAPI.delete(`/api/book/delete/${id}`)
  return response
}

export default {
  axiosFetchAPI,
  getBookList,
  createBook,
  updateBook,
  deleteBook,
}
