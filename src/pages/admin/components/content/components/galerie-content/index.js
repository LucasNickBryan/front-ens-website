import React from 'react'
import { Input } from '../../../../ui/input'
import { ImageUploader } from '../../../../ui/image-uploader'

export const GalerieContent = () => {
  return (
    <div>
      <div className=''>
        <label className='uppercase'>IMAGE</label>
        <Input type="checkbox" useDefaultClassName={false}/>
      </div>
      <div>
        <ImageUploader />
      </div>
    </div>
  )
}
