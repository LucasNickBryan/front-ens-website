import React, { useState } from 'react'
import AddPersonnel from './add-personnel'
import ListPersonnel from './list-personnel'
import { PersonnelProvider } from '../../../../../../contexts/PersonnelContext'
import { ButtonUI } from '../../../../ui/buttons'

export const PersonnelContent = () => {
  const [state, setState] = useState(true) // true: ListContent
  const [textState, setTextState] = useState('ajouter')
  const [idToUpdate, setIdToUpdate] = useState(0)

  const onHandleState = () => {
    setState(prev => !prev)
    state ? setTextState('voir la liste') : setTextState('ajouter')
    !state && setIdToUpdate(0)
  }

  const onUpdate = (id) => {
    setTextState('retour')
    setIdToUpdate(id)
    setState(false)
  }

  return (
    <PersonnelProvider>
      <div className='h-full w-full overflow-auto p-2'>
        <ButtonUI onClick={onHandleState}>{textState}</ButtonUI>
        {
          state ?
            <div className='mt-5'>
              <ListPersonnel onUpdate={onUpdate} />
            </div>
            :
            <div className='mt-5'>
              <AddPersonnel idToUpdate={idToUpdate} />
            </div>
        }
      </div>
    </PersonnelProvider>
  )
}