import React, { useEffect, useState } from 'react';
import ImageUploading from 'react-images-uploading';
import CloudUploadAlt from '../../../assets/icons/cloud-upload-alt.png'
import TrashIcon from '../../../assets/icons/trash.png'
import RedoIcon from '../../../assets/icons/redo.png'

export function ImageUploader(props) {
  const [images, setImages] = useState([]);
  const [checkedImages, setCheckedImages] = useState([])
  const { mutilple, text_box, updateImages } = props
  const maxNumber = 10;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
    updateImages(imageList); // parent images
  };
  const onCheckImage = () => {
    const checklists = []
    const inputs = document.querySelectorAll('.checkbox_input')
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].checked && checklists.push(i)
    }
    setCheckedImages(checklists)
  }

  return (
    <div className="App">
      <ImageUploading
        multiple={mutilple}
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="h-full rounded-lg bg-gray-100 p-2 h-[100%]">
            <button
              type='button'
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
              className={`border border-4 border-dashed border-gray-500 w-full py-8 mb-4 ${images.length > 0 && !mutilple ? 'hidden' : ''}`}
            >
              <div className='flex justify-center gap-3'>
                <img src={CloudUploadAlt} alt='file' className='max-w-[100px] sm:hidden' />
                {text_box ??
                  <div>
                    <div>appyuer pour ajouter des images</div>
                    <div>ou</div>
                    <div>glissez et déposez vos images ici</div>
                  </div>
                }
              </div>
            </button>

            {
              (images.length > 0 && mutilple) &&
              <div className='mb-5'>
                <button type='button' onClick={onImageRemoveAll} className='bg-white p-2 rounded-full shadow-lg'>
                  <img src={TrashIcon} alt="delete" className='w-4 inline-block' />
                  <span className='text-redcolor inline-block ml-1'>retirer toute les images</span>
                </button>
              </div>
            }

            <div className='grid grid-cols-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 content-around'>
              {imageList.map((image, index) => (
                <div key={index} className="bg-white shadow-lg max-w-[200px] p-3 flex flex-col justify-between">
                  <img src={image['data_url']} alt="" className='h-auto hover:scale-110 transition ease-in-out delay-150' />
                  <div className="mt-2 flex justify-evenly gap-8">
                    {mutilple && <input className='cursor-pointer checkbox_input' type="checkbox" onChange={onCheckImage} />}
                    <button type='button' onClick={() => onImageUpdate(index)}>
                      <img src={RedoIcon} alt='redo' className='w-4' />
                    </button>
                    <button type='button' onClick={() => onImageRemove(index)}>
                      <img src={TrashIcon} alt='delete' className='w-4' />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

ImageUploader.defautProps = {
  mutilple: false
}