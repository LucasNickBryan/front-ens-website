import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignInPage } from '../../../pages/sign-in/components'

export const SignInRoutes = () => {
  return (
    <Routes>
        <Route path='/sign-in' element={<SignInPage />} />
    </Routes>
  )
}
