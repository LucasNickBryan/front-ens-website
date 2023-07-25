import React, { useEffect, useState } from 'react'
import { NavbarAdmin } from './navbar'
import { SidebarAdmin } from './sidebar'
import { ContentAdmin } from './content'
import './styles.scss'
import { useNavigate } from 'react-router-dom'
import { UserProvider } from '../../../contexts/UserContext'

export const AdminPage = () => {
  const [pageLocation, setPageLocation] = useState("admin panel")
  let navigate = useNavigate();

  const onChangeActive = (e) => {
    const elements = document.querySelectorAll('.to-active');
    elements.forEach((element) => {
      element.classList.remove('active-admin');
      element.classList.remove('active');
    });
    if (e.target.classList.contains('admin-panel')) {
      e.target.classList.add('active-admin')
    }
    else {
      e.target.classList.add('active')
    }
  }

  useEffect(() => {
    !localStorage.getItem("user_token") && navigate("/sign-in");
  }, [])

  return (
    <div className="flex w-full h-screen bg-gradient-to-b from-white from-95% to-red-200">
      <div className='w-80 p-3'>
        <SidebarAdmin newLocation={setPageLocation} onChangeActive={onChangeActive} />
      </div>

      <div className='p-3 w-full'>
        <UserProvider>
          <NavbarAdmin pageLocation={pageLocation} newLocation={setPageLocation} />
        </UserProvider>

        <div className='p-3 shadow-xl rounded bg-white mt-4 admincontent'>
          <ContentAdmin />
        </div>
      </div>

    </div>
  )
}
