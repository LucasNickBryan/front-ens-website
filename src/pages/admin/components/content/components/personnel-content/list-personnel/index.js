import React, { useContext, useEffect, useState } from 'react'
import DefautImage from '../../../../../../../assets/icons/image.png'
import PencilIcon from '../../../../../../../assets/icons/pencil-alt.png'
import DeleteIcon from '../../../../../../../assets/icons/trash.png'
import { PersonnelContext } from '../../../../../../../contexts/PersonnelContext'
import Skeleton from '../../../../../ui/skeleton'
import DeleteModal from '../../../../../ui/modal'
import { IMAGE_PATH } from '../../../../../../../config/modules'

export default function ListPersonnel(props) {
    const { onUpdate } = props
    const { personnels, fetchPersonnel, deletePersonnel } = useContext(PersonnelContext)
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
            deletePersonnel(idToDelete)
            setOpenModal(false)
        }
    }

    useEffect(()=>{
        fetchPersonnel()
    },[])

    return (
        <div className='overflow-auto rounded min-w-sm md:overflow-auto'>
            {
                openModal && <DeleteModal onClose={onCancelDelete} onConfirm={onConfirmDelete} />
            }
            <table className="table-auto w-full">
                <thead className='bg-slate-100 rounded-t-2xl '>
                    <tr className='uppercase text-left'>
                        <th className='p-3'>photo</th>
                        <th>nom</th>
                        <th>descritpions</th>
                        <th>année</th>
                        <th>fonction</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody className='border border-1 rounded p-2'>
                    {
                        personnels.length > 0 ?
                            personnels.map(staff => (
                                <tr key={staff.id}>
                                    <td className='p-2'>
                                        <img src={ staff.avatar ?
                                        IMAGE_PATH +  "/staffs/images/" :
                                         DefautImage} className='w-24' />
                                    </td>
                                    <td>{staff.name}</td>
                                    <td>{staff.description}</td>
                                    <td>{staff.year}</td>
                                    <td>{staff.Occupation.name}</td>
                                    <td className='table-cell align-middle'>
                                        <div className='m-auto grid grid-cols-2'>
                                            <img src={PencilIcon} alt="edit" className='w-7 cursor-pointer' onClick={() => onUpdate(staff.id)} />
                                            <img src={DeleteIcon} alt="delete" className='w-5 cursor-pointer' onClick={()=>onHandleDelete(staff.id)} />
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
