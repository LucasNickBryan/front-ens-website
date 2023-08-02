import React, { useState } from 'react'
import ListUser from './list-users'
import AddUser from './add-users'
import { UserProvider } from '../../../../../../contexts/UserContext'
import { ButtonUI } from '../../../../ui/buttons'

export const UsersAdmin = () => {
  const [state, setState] = useState(true) // true: ListUser
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
    <UserProvider>
      <div className='h-full w-full overflow-auto p-2'>
        <ButtonUI onClick={onHandleState}>{textState}</ButtonUI>
        {
          state ?
            <div className='mt-5'>
              <ListUser onUpdate={onUpdate} />
            </div>
            :
            <div className='mt-5'>
              <AddUser idToUpdate={idToUpdate} />
            </div>
        }
      </div>
    </UserProvider>
  )
}
