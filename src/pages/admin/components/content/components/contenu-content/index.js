import React, { useState } from 'react'
import AddContent from './add-content'
import ListContent from './list-content'
import { ContentProvider } from '../../../../../../contexts/ContentContext'

export const ContenuContent = () => {
  const [state, setState] = useState(true) // true: ListContent
  const [textState, setTextState] = useState('ajouter')
  const [idToUpdate, setIdToUpdate] = useState(0)

  const onHandleState = () => {
    setState(prev => !prev)
    state ? setTextState('voir la liste') : setTextState('ajouter')
    !state && setIdToUpdate(0)
  }

  const onUpdate = (id)=>{
    setTextState('retour')
    setIdToUpdate(id)
    setState(false)
  }

  return (
    <ContentProvider>
      <div className='h-full w-full overflow-auto p-2'>
        <span className='bg-black opacity-80 text-white p-2 transition-all delay-100 cursor-pointer hover:opacity-60' onClick={onHandleState}>{textState}</span>
        {
          state ?
            <div className='mt-5'>
              <ListContent onUpdate={onUpdate} />
            </div>
            :
            <div className='mt-5'>
              <AddContent idToUpdate={idToUpdate}  />
            </div>
        }
      </div>
    </ContentProvider>
  )
}