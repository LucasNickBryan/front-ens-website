import React, { useState } from 'react'
import ListGallery from './list-gallery'
import AddGallery from './add-gallery'

export const GalerieContent = () => {
  const [state, setState] = useState(true) // true: ListContent
  const [textState, setTextState] = useState('ajouter')

  const onHandleState = ()=>{
    setState(prev => !prev)
    state ?  setTextState('voir la liste') : setTextState('ajouter')
  }

  return (
    <div className='h-full w-full overflow-auto p-2'>
      <span className='bg-black opacity-80 text-white p-2 rounded-full cursor-pointer hover:opacity-60' onClick={onHandleState}>{textState}</span>
      {
        state ?
          <div className='mt-5'>
            <ListGallery />
          </div>
          :
          <div className='mt-5'>
            <AddGallery />
          </div>
      }
    </div>
  )
}