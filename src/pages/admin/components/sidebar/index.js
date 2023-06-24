import React from 'react'
import { ButtonUi } from '../../ui/button-ui'

export const SidebarAdmin = () => {
  return (
    <div className='h-full p-2 drop-shadow-lg bg-gradient-to-b from-white to-green-200 rounded'>
      <div className='text-2xl font-mono text-center py-2 cursor-pointer hover:text-redcolor active'>Admin Panel</div>
      <hr className='h-1 bg-white'/>
      <div className='mt-20'>
        <ButtonUi>contenu</ButtonUi>
        <ButtonUi>galerie</ButtonUi>
        <ButtonUi>fonction</ButtonUi>
        <ButtonUi>personnel</ButtonUi>
      </div>
    </div>
  )
}
