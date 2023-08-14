import React, { useContext, useState } from 'react'
import { ImageUploader } from '../../../../../ui/image-uploader'
import { GalleryContext } from '../../../../../../../contexts/GalleryContext'

export default function AddGallery(props) {
  const { onHandleState } = props
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
    addGallery(gallery_images,onHandleState)
    // onHandleState()
  }

  return (
    <div className='h-full overflow-auto'>
      <span className='text-base'>Les images cochées seront mises à la une.</span>
      <div className='h-full mt-2'>
        <ImageUploader
          multiple
          updateImages={setImages}
          enableChecked
          setCheckedImages={setCheckedImages}
          useSaveButton
          onSave={onSave}
        />
      </div>
    </div>
  )
}