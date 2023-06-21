import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { AdminPage } from '../../../pages/admin/components'

export const AdminRoutes = () => {
  return (
    <Routes>
        <Route path='/admin' element={<AdminPage/>}/>
    </Routes>   
  )
}
