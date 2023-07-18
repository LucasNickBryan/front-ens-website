import React, { useContext, useEffect, useState } from 'react'
import DefautImage from '../../../../../../../assets/icons/image.png'
import PencilIcon from '../../../../../../../assets/icons/pencil-alt.png'
import DeleteIcon from '../../../../../../../assets/icons/trash.png'
import ContentServices from '../../../../../../../services/Content.services'
import { ContentContext } from '../../../../../../../contexts/ContentContext'
import Skeleton from '../../../../../ui/skeleton'
import { IMAGE_PATH } from '../../../../../../../config/env/env'

export default function ListContent(props) {
    const { onUpdate } = props

    const { contents, fetchContent, deleteContent } = useContext(ContentContext)

    useEffect(() => {
        fetchContent()
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
                                            <img src={content.Picture.image ?
                                                IMAGE_PATH + "/pictures/images/" + content.Picture.image
                                                :
                                                DefautImage} className='w-24' />
                                        </td>
                                        <td>{content.Content.title}</td>
                                        <td>{content.Content.date}</td>
                                        <td>{content.Content.description}</td>
                                        <td>{content.Content.link ?? ""}</td>
                                        <td>{content.Content.isActuality ? "Actu" : "Historique"}</td>
                                        <td className='table-cell align-middle'>
                                            <div className='m-auto grid grid-cols-2'>
                                                <img src={PencilIcon} alt="edit" className='w-7 cursor-pointer' onClick={()=>onUpdate(content.id)} />
                                                <img src={DeleteIcon} alt="delete" className='w-5 cursor-pointer' onClick={()=>deleteContent(content.id)} />
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
