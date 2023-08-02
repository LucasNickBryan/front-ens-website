import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const SideButtonUi = (props) => {
  let navigate = useNavigate()
  const { url, location, newLocation, path } = props
  const current_location = useLocation();

  const onHandleClick = (e) => {
    navigate(url);
    newLocation(location)
    // onChangeActive(e)
    const elements = document.querySelectorAll('.to-active');
    let index=0;
    let to_active=0;
    elements.forEach((element) => {
      element.classList.remove('active');
      element.classList.remove('active-admin');
      if(e.target == element){
        to_active = index;
      }
      index++;
    });
    e.target.classList.add('active')
    localStorage.setItem('adminButtonActive', to_active);
  }
  useEffect(() => {
    const elements = document.querySelectorAll('.to-active');
    elements.forEach((element) => {
      element.classList.remove('active');
      element.classList.remove('active-admin');
    });
    localStorage.getItem('adminButtonActive') && elements[localStorage.getItem('adminButtonActive')].classList.add('active')
  }, [])
  

  return (
    <span className='py-2 text-lg buttonui text-center rounded-lg to-active shadow-lg bg-white mb-5 w-44'
      onClick={(e) => onHandleClick(e)}>
      {props.children}
    </span>
  )
}

SideButtonUi.defaultProps = {
  url: "#",
}