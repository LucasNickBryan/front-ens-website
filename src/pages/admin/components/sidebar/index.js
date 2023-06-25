import React from 'react'
import { ButtonUi } from '../../ui/button-ui'
import { useNavigate } from 'react-router-dom'

export const SidebarAdmin = (props) => {
  let navigate = useNavigate()
  const {newLocation} = props

  return (
    <div className='h-full p-2 drop-shadow-lg bg-gradient-to-b from-white to-green-200 rounded'>
      <div className='text-2xl font-mono text-center py-2 cursor-pointer hover:text-redcolor active' onClick={()=>{navigate(""); newLocation("admin panel")}}>Admin Panel</div>
      <hr className='h-1 bg-white'/>
      <div className='mt-20'>
        <ButtonUi url="content" location="contenu" newLocation={newLocation}>contenu</ButtonUi>
        <ButtonUi url="gallery" location="galerie" newLocation={newLocation}>galerie</ButtonUi>
        <ButtonUi url="function" location="fonction" newLocation={newLocation}>fonction</ButtonUi>
        <ButtonUi url="personnel" location="personel" newLocation={newLocation}>personnel</ButtonUi>
      </div>
    </div>
  )
}