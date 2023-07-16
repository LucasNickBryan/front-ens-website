import React from 'react'
import { Input } from '../../../../../ui/input'
import { ImageUploader } from '../../../../../ui/image-uploader'
import { RequiredStar, UniqueImageText } from '../../../../../ui/texts'
import SelectUi from '../../../../../ui/select'
export default function AddUser() {
  return (
    <div className='flex gap-5 lg:flex-col'>
      <div className='w-1/2 lg:!w-full p-5'>

        <div className='pb-5'>
          <label className='uppercase'>photo</label>
          <ImageUploader text_box={<UniqueImageText />} />
        </div>
        <div className='pb-5'>
          <label className='uppercase'>nom d'utilisateur {<RequiredStar />}</label>
          <Input />
        </div>
        <div className='pb-5'>
          <label className='uppercase'>rôle {<RequiredStar />}</label>
          <SelectUi />
        </div>
        <div className='pb-5'>
          <label className='uppercase'>mot de passe {<RequiredStar />}</label>
          <Input />
        </div>
        <div className='pb-5'>
          <label className='uppercase'>confirmer mot de passe {<RequiredStar />}</label>
          <Input />
        </div>
      </div>
    </div>
  )
}
