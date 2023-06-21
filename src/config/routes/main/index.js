import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomePage } from '../../../pages/main/home/components'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
    </Routes>   
  )
}
