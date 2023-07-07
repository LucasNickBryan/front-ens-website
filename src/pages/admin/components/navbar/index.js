import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import userDefaultImage from './../../../../assets/images/User.ico'

export const NavbarAdmin = (props) => {
  const [isMenuShown, setIsMenuShown] = useState(false)

  const { pageLocation, newLocation } = props

  const toggleDropdownMenu = () => {
    setIsMenuShown(!isMenuShown)
  }

  const onHandleClick = (path) => {
    toggleDropdownMenu()
    newLocation(path)

    const elements = document.querySelectorAll('.to-active');
    elements.forEach((element) => {
      element.classList.remove('active-admin');
      element.classList.remove('active');
    });
  }

  return (
    <div className="w-full p-2 drop-shadow-lg bg-gradient-to-r from-white to-green-200 rounded flex justify-between px-10">
      <div className='pt-1.5'>page: <span className='underline underline-offset-4'>{pageLocation}</span></div>

      <div className='sm:hidden md:block'>
        <img src={userDefaultImage} alt="User" className='inline h-10 mr-1 hover:scale-110' />
        <span>John Doe</span>
      </div>

      {/* DROPDOWN */}
      <div className="relative inline-block text-left pt-1.5">
        <div>
          <button type="button" onClick={toggleDropdownMenu}
            className="inline-flex w-full justify-center text-2xl " id="menu-button" aria-expanded="true" aria-haspopup="true">
            <i className="fa fa-cog hover:text-white hover:animate-spin"></i>
          </button>
        </div>
        {/* Dropdown menu */}
        {
          isMenuShown &&
          <div className="absolute right-0 z-10 dropdownmenubox mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div className="py-1" role="none">
              <Link to="account" className="text-gray-700 block px-4 py-2 text-sm dropdownmenu" onClick={() => onHandleClick('mon compte')}>
                <span><i className='fa fa-user-edit'></i> mon compte</span>
              </Link>
              <Link to="users" className="text-gray-700 block px-4 py-2 text-sm dropdownmenu" onClick={() => onHandleClick('utilisateur(s)')}>
                <span><i className='fa fa-users'></i> utilisateur(s)</span>
              </Link>
              <hr className='mt-3' />
              <Link to="#" className="text-gray-700 block px-4 py-2 text-sm dropdownmenu" onClick={toggleDropdownMenu}>
                <span className='text-redcolor'><i className='fa fa-sign-out-alt'></i> se déconnecter</span>
              </Link>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

// eslint-disable-next-line
{/*
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
*/}