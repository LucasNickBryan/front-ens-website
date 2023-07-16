import React, { useState } from 'react'
import ListUser from './list-users'
import AddUser from './add-users'

export const UsersAdmin = () => {
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
            <ListUser />
          </div>
          :
          <div className='mt-5'>
            <AddUser />
          </div>
      }
    </div>
  )
}
