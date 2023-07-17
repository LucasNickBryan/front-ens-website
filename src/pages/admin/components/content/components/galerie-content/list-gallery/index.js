import React, { useState } from 'react'
import Skeleton from '../../../../../ui/skeleton'

export default function ListGallery() {
    const [images, setImages] = useState([])
    return (
        <div>
            {
                images.length < 1 &&
                <div>
                    <h2>Aucune image &agrave; afficher</h2>
                    <div className='flex gap-3 flex-row md:flex-col'>
                        <Skeleton delay={75} />
                        <Skeleton delay={500} />
                        <Skeleton delay={1000} />
                    </div>
                </div>
            }
        </div>
    )
}
