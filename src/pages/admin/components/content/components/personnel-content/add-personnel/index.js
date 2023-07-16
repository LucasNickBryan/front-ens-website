import React from 'react'
import { Input } from '../../../../../ui/input'
import { requiredStar } from '../../contenu-content/add-content'
import { ImageUploader } from '../../../../../ui/image-uploader'
import { TextBox } from '../../../../../ui/texts'
import SelectUi from '../../../../../ui/select'

export default function AddPersonnel() {
  return (
    <div className='flex gap-5 lg:flex-col'>
      <div className='w-1/2 lg:!w-full p-5'>

        <div className='pb-5'>
          <label className='uppercase'>photo {requiredStar}</label>
          <ImageUploader text_box={<TextBox/>}/>
        </div>
        <div className='pb-5'>
          <label className='uppercase'>nom {requiredStar}</label>
          <Input />
        </div>
        <div className='pb-5'>
          <label className='uppercase'>descritpions {requiredStar}</label>
          <textarea rows={2} className="w-full shadow-md border border-black-100 rounded p-1 mb-2 focus:shadow-greencolor"></textarea>
        </div>
        <div className='pb-5'>
          <label className='uppercase'>année {requiredStar}</label>
          <Input />
        </div>
        <div className='pb-5'>
          <label className='uppercase'>fonction {requiredStar}</label>
          <SelectUi />
        </div>
      </div>

    </div>
  )
}
