import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ButtonUi = (props) => {
  let navigate = useNavigate()
  const { url, location, newLocation } = props

  return (
    <span className='block py-2 text-lg buttonui md:pl-8 sm:pl2'
      onClick={() => {
        navigate(url);
        newLocation(location)
      }}>
      {props.children}
    </span>
  )
}

ButtonUi.defaultProps = {
  url: "#",
}