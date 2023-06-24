import React, { useState } from 'react'

export const NavbarAdmin = () => {
  const [isMenuShown, setIsMenuShown] = useState(false)
  const [defaultPage, setDefaultPage] = useState('admin panel')

  const toggleMenu = () => {
    setIsMenuShown(!isMenuShown)
  }

  return (
    <div className="w-full p-2 drop-shadow-lg bg-gradient-to-r from-white to-green-200 rounded flex justify-between px-10">
      <div>page: <span className='underline underline-offset-4'>{defaultPage}</span></div>

      {/* DROPDOWN */}
      <div className="relative inline-block text-left">
        <div>
          <button type="button" onClick={toggleMenu}
            className="inline-flex w-full justify-center text-2xl " id="menu-button" aria-expanded="true" aria-haspopup="true">
            <i className="fa fa-cog hover:text-white hover:animate-spin"></i>
          </button>
        </div>
        {/* Dropdown menu */}
        {
          isMenuShown &&
          <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div className="py-1" role="none">
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm dropdownmenu" role="menuitem" tabindex="-1">
                <span><i className='fa fa-user-edit'></i> mon compte</span>
              </a>
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm dropdownmenu" role="menuitem" tabindex="-1">
                <span><i className='fa fa-users'></i> utilisateur(s)</span>
              </a>
              <hr className='mt-3'/>
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm dropdownmenu" role="menuitem" tabindex="-1">
                <span className='text-redcolor'><i className='fa fa-sign-out-alt'></i> se déconnecter</span>
              </a>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

{/* <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}