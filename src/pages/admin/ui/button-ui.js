import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ButtonUi = (props) => {
  let navigate = useNavigate()
  const { url, location, newLocation, onChangeActive } = props

  const onHandleClick= (e)=>{
    navigate(url);
    newLocation(location)
    onChangeActive(e)
  }

  return (
    <span className='block py-2 text-lg buttonui md:pl-8 sm:pl2 to-active'
      onClick={(e)=>onHandleClick(e)}>
      {props.children}
    </span>
  )
}

ButtonUi.defaultProps = {
  url: "#",
}