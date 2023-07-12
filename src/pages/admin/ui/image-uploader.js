import React from 'react';
import ImageUploading from 'react-images-uploading';
import CloudUploadAlt from '../../../assets/images/cloud-upload-alt.png'
import TrashIcon from '../../../assets/images/trash.png'
import RedoIcon from '../../../assets/images/redo.png'

export function ImageUploader() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
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
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
              className='border border-4 border-dashed border-gray-500 w-full py-8 mb-4'
            >
              <div className='flex justify-center gap-3'>
                <img src={CloudUploadAlt} alt='file' className='max-w-[100px] sm:hidden' />
                <div>
                  <div>appyuer pour ajouter des images</div>
                  <div>ou</div>
                  <div>glissez et déposez vos images ici</div>

                </div>
              </div>
            </button>

            {
              images.length > 0 &&
              <div className='mb-5'>
                <button onClick={onImageRemoveAll} className='bg-white p-2 rounded-full shadow-lg'>
                  <img src={TrashIcon} alt="delete" className='w-4 inline-block' />
                  <span className='text-redcolor inline-block ml-1'>retirer toute les images</span>
                </button>
              </div>
            }

            <div className='grid grid-cols-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 content-around'>
              {imageList.map((image, index) => (
                <div key={index} className="bg-white shadow-lg max-w-[200px] p-3 flex flex-col justify-between">
                  <img src={image['data_url']} alt="" className='h-auto' />
                  <div className="mt-2 flex justify-evenly gap-8">
                    <button onClick={() => onImageUpdate(index)}>
                      <img src={RedoIcon} alt='redo' className='w-4' />
                    </button>
                    <button onClick={() => onImageRemove(index)}>
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