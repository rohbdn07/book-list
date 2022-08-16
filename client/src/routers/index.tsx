import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

/**
 *
 * @returns various routes to display pages
 */
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>Opps! this route doesnot exist. There is nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  )
}

export default AppRoutes
