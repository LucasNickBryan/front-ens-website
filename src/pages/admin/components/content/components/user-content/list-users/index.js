import React, { useContext, useEffect, useState } from 'react'
import DefautImage from '../../../../../../../assets/icons/image.png'
import PencilIcon from '../../../../../../../assets/icons/pencil-alt.png'
import DeleteIcon from '../../../../../../../assets/icons/trash.png'
import DeleteModal from '../../../../../ui/modal'
import { IMAGE_PATH } from '../../../../../../../config/modules'
import Skeleton from '../../../../../ui/skeleton'
import { UserContext } from '../../../../../../../contexts/UserContext'

export default function ListUser(props) {
    const { onUpdate } = props
    const { users, fetchUser, disableUser, deleteUser } = useContext(UserContext)
    const [openModal, setOpenModal] = useState(false)
    const [idToDelete, setIdToDelete] = useState(0)

    const onHandleDelete = (id) => {
        setOpenModal(true)
        setIdToDelete(id)
    }

    const onCancelDelete = () => {
        setOpenModal(false)
        setIdToDelete(0)
    }

    const onConfirmDelete = () => {
        if (idToDelete > 0) {
            deleteUser(idToDelete)
            setOpenModal(false)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div className='overflow-auto rounded min-w-sm md:overflow-auto'>
            {
                openModal && <DeleteModal onClose={onCancelDelete} onConfirm={onConfirmDelete} />
            }
            <table className="table-auto w-full">
                <thead className='bg-slate-100 rounded-t-2xl'>
                    <tr className='uppercase text-left'>
                        <th className='p-3'>photo</th>
                        <th>nom d'utilisateur</th>
                        <th>rôle</th>
                        <th>compte</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody className='border border-2 rounded p-2'>
                    {
                        users.length > 0 ?
                            users.map(user => (
                                <tr>
                                    <td className='p-2'>
                                        <img src={user.avatar ?
                                            IMAGE_PATH + "/staffs/images/" + user.avatar :
                                            DefautImage} className='w-24' />
                                    </td>
                                    <td>{user.username}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        {
                                            user.isActive ?
                                                <button className='p-1 px-4 rounded-full text-white bg-greencolor'
                                                    onClick={() => disableUser(user.id)}
                                                >activé</button>
                                                :
                                                <button className='p-1 px-4 rounded-full text-white bg-redcolor'
                                                    onClick={() => disableUser(user.id)}
                                                >bloqué</button>
                                        }
                                    </td>
                                    <td className='table-cell align-middle'>
                                        <div className='m-auto grid grid-cols-2'>
                                            <img src={PencilIcon} alt="edit" className='w-7 cursor-pointer' onClick={() => onUpdate(user.id)} />
                                            <img src={DeleteIcon} alt="delete" className='w-5 cursor-pointer' onClick={() => onHandleDelete(user.id)} />
                                        </div>
                                    </td>
                                </tr>
                            ))
                            :
                            <tr>
                                <td colSpan={6}><Skeleton /></td>
                            </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}
