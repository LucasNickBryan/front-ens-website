import React, { useEffect } from 'react'
import { SideButtonUi } from '../../ui/side-button-ui'
import { useNavigate } from 'react-router-dom'

export const SidebarAdmin = (props) => {
  let navigate = useNavigate()
  const { newLocation, onChangeActive } = props

  const onAdminClick = (e) => {
    navigate("");
    newLocation("admin panel")
    onChangeActive(e)
    localStorage.setItem('adminButtonActive', 0);
  }

  useEffect(() => {
    const element = document.querySelector('.admin-panel');
    if(localStorage.getItem('adminButtonActive') && localStorage.getItem('adminButtonActive') <1 ){
      element.classList.add('active-admin')
    }
  }, [])

  return (
    <div className='h-full p-2 drop-shadow-lg bg-gradient-to-b from-white to-green-200 rounded'>
      <div className='text-2xl font-mono text-center py-2 cursor-pointer hover:text-redcolor to-active active-admin admin-panel'
        onClick={(e) => onAdminClick(e)}>Admin Panel</div>

      <hr className='h-1 bg-white' />
      <div className='mt-20'>
        <div className='flex justify-center'>
          <SideButtonUi url="content" location="contenu" path="content" newLocation={newLocation} onChangeActive={onChangeActive}>
            <i className='fa fa-toolbox'></i> contenu
          </SideButtonUi>
        </div>
        <div className='flex justify-center'>
          <SideButtonUi url="gallery" location="galerie" path="gallery" newLocation={newLocation} onChangeActive={onChangeActive}>
            <i className='fa fa-images'></i> galerie
          </SideButtonUi>
        </div>
        <div className='flex justify-center'>
          <SideButtonUi url="function" location="fonction" path="function" newLocation={newLocation} onChangeActive={onChangeActive}>
            <i className='fa fa-people-arrows'></i> fonction
          </SideButtonUi>
        </div>
        <div className='flex justify-center'>
          <SideButtonUi url="personnel" location="personel" path="personnel" newLocation={newLocation} onChangeActive={onChangeActive}>
            <i className='fa fa-user-tie'></i> personnel
          </SideButtonUi>
        </div>
      </div>
    </div>
  )
}