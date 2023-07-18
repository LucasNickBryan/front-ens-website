import React, { useContext, useEffect, useState } from 'react'
import DefautImage from '../../../../../../../assets/icons/image.png'
import PencilIcon from '../../../../../../../assets/icons/pencil-alt.png'
import DeleteIcon from '../../../../../../../assets/icons/trash.png'
import ContentServices from '../../../../../../../services/Content.services'
import { ContentContext } from '../../../../../../../contexts/ContentContext'
import Skeleton from '../../../../../ui/skeleton'

export default function ListContent() {

    const { contents, fetchContent } = useContext(ContentContext)

    useEffect(() => {
        fetchContent()
        ContentServices.get()
            .then((res) => {
                console.log("SUCCEES");
            },
                err => {
                    console.log("ERROR");
                }
            )
    }, [])

    return (
        <div className='overflow-auto rounded min-w-sm md:overflow-auto'>
            <table className="table-auto w-full">
                <thead className='bg-gray-200 rounded-t-2xl shadow-lg'>
                    <tr className='uppercase text-left'>
                        <th className='p-3'>image</th>
                        <th>titre</th>
                        <th>date</th>
                        <th>descritpions</th>
                        <th>lien</th>
                        <th>type</th>
                        <th>actions</th>
                    </tr>
                </thead>
                {
                    contents.length > 0 ?
                        <tbody className='border border-2 rounded p-2'>
                            {
                                contents.map((content) => (
                                    <tr key={content.id}>
                                        <td className='p-2'>
                                            <img src={content.image ?? DefautImage} className='w-24' />
                                        </td>
                                        <td>{content.title}</td>
                                        <td>{content.date}</td>
                                        <td>{content.description}</td>
                                        <td>{content.link ?? ""}</td>
                                        <td>{content.isActuality ? "Actu" : "Historique"}</td>
                                        <td className='table-cell align-middle'>
                                            <div className='m-auto grid grid-cols-2'>
                                                <img src={PencilIcon} alt="edit" className='w-7 cursor-pointer' />
                                                <img src={DeleteIcon} alt="delete" className='w-5 cursor-pointer' />
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        :
                        <Skeleton />
                }
            </table>
        </div>
    )
}
