import React from 'react'

export const ButtonUi = (props) => {
  return (
    <span className='block py-2 text-lg buttonui pl-8'>
        {props.children}
    </span>
  )
}
