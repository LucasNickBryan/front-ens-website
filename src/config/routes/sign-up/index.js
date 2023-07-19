import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import { SignInPage } from '../../../pages/sign-in/components'
import SignIn from '../../../pages/sign-in'

export const SignInRoutes = () => {
  return (
    <Routes>
        {/* <Route path='/sign-in' element={<SignInPage />} /> */}
        <Route path='/sign-in' element={<SignIn />} />
    </Routes>
  )
}
