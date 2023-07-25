import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../../../pages/sign-in'

export const SignInRoutes = () => {
  return (
    <Routes>
        <Route path='/sign-in' element={<SignIn />} />
    </Routes>
  )
}
