import React from 'react'
import { Input } from '../../../../ui/input'
import { ImageUploader } from '../../../../ui/image-uploader'

export const GalerieContent = () => {
  return (
    <div className='h-full overflow-auto'>
      <div className=''>
        <label className='uppercase'>IMAGE</label>
        <Input type="checkbox" useDefaultClassName={false}/>
      </div>
      <div className='h-full'>
        <ImageUploader />
      </div>
    </div>
  )
}
