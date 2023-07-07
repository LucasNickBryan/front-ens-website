import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SideButtonUi = (props) => {
  let navigate = useNavigate()
  const { url, location, newLocation, onChangeActive } = props

  const onHandleClick= (e)=>{
    navigate(url);
    newLocation(location)
    onChangeActive(e)
  }

  return (
    <span className='py-2 text-lg buttonui text-center rounded-lg to-active shadow-lg bg-white mb-5 w-44'
      onClick={(e)=>onHandleClick(e)}>
      {props.children}
    </span>
  )
}

SideButtonUi.defaultProps = {
  url: "#",
}