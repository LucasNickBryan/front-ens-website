import React, { useState } from 'react'
import ListGallery from './list-gallery'
import AddGallery from './add-gallery'
import { GalleryProvider } from '../../../../../../contexts/GalleryContext'
import { ButtonUI } from '../../../../ui/buttons'

export const GalerieContent = () => {
  const [state, setState] = useState(true) // true: ListContent
  const [textState, setTextState] = useState('ajouter')

  const onHandleState = () => {
    setState(prev => !prev)
    state ? setTextState('voir la liste') : setTextState('ajouter')
  }

  return (
    <GalleryProvider>
      <div className='h-full w-full overflow-auto p-2'>
        <ButtonUI onClick={onHandleState}>{textState}</ButtonUI>
        {
          state ?
            <div className='mt-5'>
              <ListGallery />
            </div>
            :
            <div className='mt-5'>
              <AddGallery onHandleState={onHandleState} />
            </div>
        }
      </div>
    </GalleryProvider>
  )
}