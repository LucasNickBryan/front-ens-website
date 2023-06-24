import React from 'react'

export const ButtonUi = (props) => {
  return (
    <span className='block py-2 text-lg buttonui md:pl-8 sm:pl2'>
        {props.children}
    </span>
  )
}
