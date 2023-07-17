import React, { useState } from 'react'
import { ImageUploader } from '../../../../../ui/image-uploader'

export default function AddGallery() {
  const [images, setImages] = useState([])
  return (
    <div className='h-full overflow-auto'>
      <div className='h-full'>
        <ImageUploader mutilple={true} updateImages={setImages} />
      </div>
    </div>
  )
}
