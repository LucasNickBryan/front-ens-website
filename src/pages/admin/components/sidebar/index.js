import React from 'react'
import { SideButtonUi } from '../../ui/side-button-ui'
import { useNavigate } from 'react-router-dom'

export const SidebarAdmin = (props) => {
  let navigate = useNavigate()
  const { newLocation, onChangeActive } = props
  const href = window.location.href

  const onAdminClick = (e) => {
    navigate("");
    newLocation("admin panel")
    onChangeActive(e)
  }

  return (
    <div className='h-full p-2 drop-shadow-lg bg-gradient-to-b from-white to-green-200 rounded'>
      <div className='text-2xl font-mono text-center py-2 cursor-pointer hover:text-redcolor to-active active-admin admin-panel'
        onClick={(e) => onAdminClick(e)}>Admin Panel</div>

      <hr className='h-1 bg-white' />
      <div className='mt-20'>
        <div className='flex justify-center'>
          <SideButtonUi url="content" location="contenu" newLocation={newLocation} onChangeActive={onChangeActive}>
            <span><i className='fa fa-toolbox'></i> contenu</span>
          </SideButtonUi>
        </div>
        <div className='flex justify-center'>
          <SideButtonUi url="gallery" location="galerie" newLocation={newLocation} onChangeActive={onChangeActive}>
            <span><i className='fa fa-images'></i> galerie</span>
          </SideButtonUi>
        </div>
        <div className='flex justify-center'>
          <SideButtonUi url="function" location="fonction" newLocation={newLocation} onChangeActive={onChangeActive}>
            <span><i className='fa fa-people-arrows'></i> fonction</span>
          </SideButtonUi>
        </div>
        <div className='flex justify-center'>
          <SideButtonUi url="personnel" location="personel" newLocation={newLocation} onChangeActive={onChangeActive}>
            <span><i className='fa fa-user-tie'></i> personnel</span>
          </SideButtonUi>
        </div>
      </div>
    </div>
  )
}