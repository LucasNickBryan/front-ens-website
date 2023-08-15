import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import userDefaultImage from './../../../../assets/icons/User.ico'
import { UserContext } from '../../../../contexts/UserContext'
import $ from 'jquery';
import './styles.scss'
import { IMAGE_PATH } from '../../../../config/modules';

export const NavbarAdmin = (props) => {
  const [isMenuShown, setIsMenuShown] = useState(false)
  const [isSetting, setIsSetting] = useState(false)

  const { pageLocation, newLocation } = props
  const { user, logout } = useContext(UserContext)

  const toggleDropdownSetting = () => {
    setIsSetting(prev => !prev)
  }
  const toggleDropdownMenu = () => {
    setIsMenuShown(prev => !prev)
  }

  const onToggle = () => {
    const menutoggle = document.querySelector('.toggle');
    menutoggle.classList.toggle('activate')
    toggleDropdownMenu()
  }

  const onHandleClick = (path) => {
    isSetting ?  toggleDropdownSetting() : onToggle()
    newLocation(path)

    const elements = document.querySelectorAll('.to-active');
    elements.forEach((element) => {
      element.classList.remove('active-admin');
      element.classList.remove('active');
    });
  }

  return (
    <div className="w-full p-2 drop-shadow-lg bg-gradient-to-r from-white to-green-200 rounded flex justify-between px-10 ADMIN_NAVBAR_STYLES">
      {/* DROPDOWN Menu */}
      <div className="relative inline-block text-left pt-1.5 md:block hidden dropdownmenubox cursor-pointer">
        <div className="toggle" onClick={onToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Dropdown Menu */}
        {
          isMenuShown &&
          <div className="absolute right-[-100px] mt-2 w-40 origin-top-right rounded-md dropdownmenubox bg-white shadow-lg ring-1 ring-black ring-opacity-5"
            role="menu" aria-orientation="vertical">
            <div className="py-1" role="none">
              <Link to="content" className="text-gray-700 block px-4 py-2 text-sm dropdownmenu" onClick={() => onHandleClick('contenu')}>
                <span><i className='fa fa-toolbox'></i> contenu</span>
              </Link>
              <hr className='mt-3' />
              <Link to="gallery" className="text-gray-700 block px-4 py-2 text-sm dropdownmenu" onClick={() => onHandleClick('galerie')}>
                <span><i className='fa fa-images'></i> galerie</span>
              </Link>
              <hr className='mt-3' />
              <Link to="function" className="text-gray-700 block px-4 py-2 text-sm dropdownmenu" onClick={() => onHandleClick('fonction')}>
                <span><i className='fa fa-people-arrows'></i> fonction</span>
              </Link>
              <hr className='mt-3' />
              <Link to="personnel" className="text-gray-700 block px-4 py-2 text-sm dropdownmenu" onClick={() => onHandleClick('personnel')}>
                <span><i className='fa fa-user-tie'></i> personnel</span>
              </Link>
            </div>
          </div>
        }
      </div>
      {/* <div className='pt-1.5 md:block hidden cursor-pointer'><span className=''>menu</span></div> */}
      <div className='pt-3 xs:hidden'>page: <span className='underline underline-offset-4'>{pageLocation}</span></div>

      <div className='sm:hidden md:block'>
        <img src={user?.avatar? IMAGE_PATH+"/staffs/images/"+user.avatar : userDefaultImage} alt="User" className='inline rounded-full w-14 h-14 mr-1 hover:scale-110' />
        <span>{user?.username}</span>
      </div>

      {/* DROPDOWN SETTINGS */}
      <div className="relative inline-block text-left pt-3">
        <div>
          <button type="button" onClick={toggleDropdownSetting}
            className="inline-flex w-full justify-center text-2xl " id="menu-button" aria-expanded="true" aria-haspopup="true">
            <i className="fa fa-cog hover:text-white hover:animate-spin"></i>
          </button>
        </div>
        {/* Dropdown setting */}
        {
          isSetting &&
          <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 "
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div className="py-1" role="none">
              <Link to="users" className="text-gray-700 block px-4 py-2 text-sm dropdownmenu" onClick={() => onHandleClick('utilisateur(s)')}>
                <span><i className='fa fa-users'></i> utilisateur(s)</span>
              </Link>
              <hr className='mt-3' />
              <div className="text-gray-700 block px-4 py-2 text-sm dropdownmenu" onClick={logout}>
                <span className='text-redcolor'><i className='fa fa-sign-out-alt'></i> se déconnecter</span>
              </div>
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