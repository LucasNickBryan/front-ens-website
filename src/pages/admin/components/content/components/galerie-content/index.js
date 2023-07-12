import React from 'react'
import { Input } from '../../../../ui/input'
import { ImageUploader } from '../../../../ui/image-uploader'

export const GalerieContent = () => {
  return (
    <div className='h-full overflow-auto'>
      <div className='h-full'>
        <ImageUploader mutilple={true} />
      </div>
    </div>
  )
}