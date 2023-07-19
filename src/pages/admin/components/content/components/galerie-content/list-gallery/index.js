import React, { useContext, useEffect, useState } from 'react'
import Skeleton from '../../../../../ui/skeleton'
import { GalleryContext } from '../../../../../../../contexts/GalleryContext'
import TrashIcon from '../../../../../../../assets/icons/trash.png'
import DeleteModal from '../../../../../ui/modal'
import { IMAGE_PATH } from '../../../../../../../config/modules'

export default function ListGallery() {
    const { galleries, fetchGallery, updateGallery, deleteGallery } = useContext(GalleryContext)
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
            deleteGallery(idToDelete)
            setOpenModal(false)
        }
    }

    useEffect(()=>{
        fetchGallery()
    }, [])

    return (
        <div>
            {
                openModal && <DeleteModal onClose={onCancelDelete} onConfirm={onConfirmDelete} />
            }

            {
                galleries.length < 1 ?
                    <div>
                        <h2>Aucune image &agrave; afficher</h2>
                        <div className='flex gap-3 flex-row md:flex-col'>
                            <Skeleton delay={75} />
                            <Skeleton delay={500} />
                            <Skeleton delay={1000} />
                        </div>
                    </div>
                    :
                    <>
                        <span className='text-base'>Les images cochées seront mises à la une.</span>
                        <div className='grid grid-cols-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 content-around'>
                            {
                                galleries.map(gallery => (
                                    <div key={gallery.id} className="bg-white shadow-lg max-w-[250px] p-3 flex flex-col justify-between">
                                        <img src={ IMAGE_PATH + "/pictures/images/" + gallery.image} alt="" className='h-auto hover:scale-110 transition-all delay-100' />
                                        <div className="mt-2 flex justify-evenly gap-8">
                                            <input className='cursor-pointer checkbox_input' type="checkbox"
                                                checked={gallery.isPrincipal}
                                                onChange={() => updateGallery(gallery.id)} />
                                            <button type='button' onClick={() => onHandleDelete(gallery.id)}>
                                                <img src={TrashIcon} alt='delete' className='w-4' />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </>
            }
        </div>
    )
}
