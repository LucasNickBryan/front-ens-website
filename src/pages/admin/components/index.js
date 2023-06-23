import React from 'react'
import { NavbarAdmin } from './navbar'
import { SidebarAdmin } from './sidebar'
import { ContentAdmin } from './content'
import './styles.scss'

export const AdminPage = () => {
  return (
    <div className="grid grid-cols-6 min-h-screen bg-gradient-to-b from-white from-95% to-red-200">
      <div className='col-span-1 p-3'>
        <SidebarAdmin />
      </div>

      <div className='col-span-5 p-3 w-100'>
        <NavbarAdmin />

        <div className='p-3'>
          <ContentAdmin />
        </div>
      </div>

    </div>
  )
}
