import React from 'react'
import { Input } from '../../../../../ui/input'
import { ImageUploader } from '../../../../../ui/image-uploader'
import { RequiredStar, UniqueImageText } from '../../../../../ui/texts'
import SelectUi from '../../../../../ui/select'

export default function AddPersonnel() {
  return (
    <div className='flex gap-5 lg:flex-col'>
      <div className='w-1/2 lg:!w-full p-5'>

        <div className='pb-5'>
          <label className='uppercase'>photo {<RequiredStar/>}</label>
          <ImageUploader text_box={<UniqueImageText/>}/>
        </div>
        <div className='pb-5'>
          <label className='uppercase'>nom {<RequiredStar/>}</label>
          <Input />
        </div>
        <div className='pb-5'>
          <label className='uppercase'>descritpions {<RequiredStar/>}</label>
          <textarea rows={2} className="w-full shadow-md border border-black-100 rounded p-1 mb-2 focus:shadow-greencolor"></textarea>
        </div>
        <div className='pb-5'>
          <label className='uppercase'>année {<RequiredStar/>}</label>
          <Input />
        </div>
        <div className='pb-5'>
          <label className='uppercase'>fonction {<RequiredStar/>}</label>
          <SelectUi />
        </div>
      </div>

    </div>
  )
}
