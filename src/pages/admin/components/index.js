import React from 'react'
import { NavbarAdmin } from './navbar'
import { SidebarAdmin } from './sidebar'
import { ContentAdmin } from './content'
import './styles.scss'

export const AdminPage = () => {
  return (
    <div className="flex w-full min-h-screen bg-gradient-to-b from-white from-95% to-red-200">
      <div className='md:w-80 sm:60 p-3'>
        <SidebarAdmin />
      </div>

      <div className='p-3 w-full'>
        <NavbarAdmin />

        <div className='p-3'>
          <ContentAdmin />
        </div>
      </div>

    </div>
  )
}
