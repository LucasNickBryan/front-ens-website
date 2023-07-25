import React, { useContext, useState } from 'react'
import { ImageUploader } from '../../../../../ui/image-uploader'
import { GalleryContext } from '../../../../../../../contexts/GalleryContext'

export default function AddGallery() {
  const [images, setImages] = useState([])
  const [checkedImages, setCheckedImages] = useState([])
  const { addGallery } = useContext(GalleryContext)

  const onSave = () => {
    let gallery_images = [];
    for(let i=0; i < images.length; i++){
      const img={
        image:images[i].file,
        isPrincipal: checkedImages.includes(i) ? true : false,
      }
      gallery_images.push(img)
    }
    addGallery(gallery_images)
  }

  return (
    <div className='h-full overflow-auto'>
      <span className='text-base'>Les images cochées seront mises à la une.</span>
      <div className='h-full mt-2'>
        <ImageUploader
          mutilple={true}
          updateImages={setImages}
          enableChecked={true}
          setCheckedImages={setCheckedImages}
          useSaveButton={true}
          onSave={onSave}
        />
      </div>
    </div>
  )
}