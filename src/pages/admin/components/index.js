import React, { useState } from 'react'
import { NavbarAdmin } from './navbar'
import { SidebarAdmin } from './sidebar'
import { ContentAdmin } from './content'
import './styles.scss'

export const AdminPage = () => {
  const [pageLocation, setPageLocation]= useState("admin panel")

  return (
    <div className="flex w-full h-screen bg-gradient-to-b from-white from-95% to-red-200">
      <div className='md:w-80 sm:60 p-3'>
        <SidebarAdmin newLocation={setPageLocation} />
      </div>

      <div className='p-3 w-full'>
        <NavbarAdmin pageLocation={pageLocation} newLocation={setPageLocation} />

        <div className='p-3 shadow-lg rounded-lg bg-white mt-4 admincontent'>
          <ContentAdmin/>
        </div>
      </div>

    </div>
  )
}
