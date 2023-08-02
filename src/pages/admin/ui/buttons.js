import React from 'react'

export const ButtonUI = (props) => {
    const {onClick} = props;

  return (
    <span className='bg-black text-white p-2 cursor-pointer hover:bg-slate-600' onClick={onClick}>{props.children}</span>
  )
}
