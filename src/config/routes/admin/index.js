import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { AdminPage } from '../../../pages/admin/components'
import { ContentAdmin } from '../../../pages/admin/components/content'
import { PersonnelContent } from '../../../pages/admin/components/content/components/personnel-content'
import { FonctionContent } from '../../../pages/admin/components/content/components/fonction-content'
import { GalerieContent } from '../../../pages/admin/components/content/components/galerie-content'
import { MainContent } from '../../../pages/admin/components/content/components/main-content'

export const AdminRoutes = () => {
  return (
    <Routes>
        <Route path='admin' element={<AdminPage/>}>
          <Route path='content' element={<ContentAdmin/>} />
          <Route path='function' element={<FonctionContent/>} />
          <Route path='gallery' element={<GalerieContent/>} />
          <Route path='personnel' element={<PersonnelContent/>} />
          <Route index element={<MainContent/>} />
        </Route>
    </Routes>   
  )
}
