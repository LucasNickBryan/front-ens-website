import React from 'react'
import DefautImage from '../../../../../../../assets/icons/image.png'
import PencilIcon from '../../../../../../../assets/icons/pencil-alt.png'
import DeleteIcon from '../../../../../../../assets/icons/trash.png'

export default function ListPersonnel() {
    return (
        <div className='overflow-auto rounded min-w-sm md:overflow-auto'>
            <table className="table-auto w-full">
                <thead className='bg-gray-200 rounded-t-2xl shadow-lg'>
                    <tr className='uppercase text-left'>
                        <th className='p-3'>photo</th>
                        <th>nom</th>
                        <th>descritpions</th>
                        <th>année</th>
                        <th>fonction</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody className='border border-2 rounded p-2'>
                    <tr>
                        <td className='p-2'>
                            <img src={DefautImage} className='w-24' />
                        </td>
                        <td>Anicet</td>
                        <td>Lorem upsum</td>
                        <td>2023-2025</td>
                        <td>Président AEENS</td>
                        <td className='table-cell align-middle'>
                            <div className='m-auto grid grid-cols-2'>
                                <img src={PencilIcon} alt="edit" className='w-7 cursor-pointer' />
                                <img src={DeleteIcon} alt="delete" className='w-5 cursor-pointer' />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
