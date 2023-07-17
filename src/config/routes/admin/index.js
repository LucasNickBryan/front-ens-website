import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { AdminPage } from '../../../pages/admin/components'
import { PersonnelContent } from '../../../pages/admin/components/content/components/personnel-content'
import { FonctionContent } from '../../../pages/admin/components/content/components/fonction-content'
import { GalerieContent } from '../../../pages/admin/components/content/components/galerie-content'
import { MainContent } from '../../../pages/admin/components/content/components/main-content'
import { ContenuContent } from '../../../pages/admin/components/content/components/contenu-content'
import { AccountAdmin } from '../../../pages/admin/components/account'
import { UsersAdmin } from '../../../pages/admin/components/content/components/user-content'

export const AdminRoutes = () => {
  return (
    <Routes>
        <Route path='admin' element={<AdminPage/>}>
          <Route path='account' element={<AccountAdmin/>} />
          <Route path='content' element={<ContenuContent/>} />
          <Route path='function' element={<FonctionContent/>} />
          <Route path='gallery' element={<GalerieContent/>} />
          <Route path='personnel' element={<PersonnelContent/>} />
          <Route path='users' element={<UsersAdmin/>} />
          <Route index element={<MainContent/>} />
        </Route>
    </Routes>   
  )
}
