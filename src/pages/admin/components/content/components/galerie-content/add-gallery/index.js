import React from 'react'
import { ImageUploader } from '../../../../../ui/image-uploader'

export default function AddGallery() {
  return (
    <div className='h-full overflow-auto'>
      <div className='h-full'>
        <ImageUploader mutilple={true} />
      </div>
    </div>
  )
}
