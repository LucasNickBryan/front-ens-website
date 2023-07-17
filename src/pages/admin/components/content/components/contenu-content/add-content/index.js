import React, { useState } from 'react'
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '/node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Input } from '../../../../../ui/input';
import { ImageUploader } from '../../../../../ui/image-uploader';
import { RequiredStar, UniqueImageText } from '../../../../../ui/texts';

function AddContent() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty()
  );
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [date, setDate] = useState('')
  const [isHistory, setIsHistory] = useState(true)

  const onChangeEvent = (value) => {
    setIsHistory(value)
  }

  return (
    <div className='flex gap-5 lg:flex-col'>
      <div className='w-1/2 lg:!w-full p-5'>

        <div className='pb-5'>
          <label className='uppercase'>Titre {<RequiredStar/>}</label>
          <Input value={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className='pb-5'>
          <label className='uppercase'>Lien vers un aperçu</label>
          <Input value={link}  onChange={e => setLink(e.target.value)} />
        </div>

        <div className='pb-5'>
          <label className='uppercase'>Date de l'événement {<RequiredStar/>}</label>
          <Input type="date" className="w-36 block"  value={date}  onChange={e => setDate(e.target.value)}  />
        </div>

        <div className='pb-5'>
          <label className='uppercase'>Type de l'événement</label>
          <div className='flex gap-5 sm:flex-col'>
            <div className='border border-black-100 w-40 p-4 rounded cursor-pointer' onClick={() => onChangeEvent(true)}>
              <Input type="radio" useDefaultClassName={false} className="mr-1" checked={isHistory} />
              <span>Historique</span>
            </div>
            <div className='border border-black-100 w-40 p-4 rounded cursor-pointer' onClick={() => onChangeEvent(false)}>
              <Input type="radio" useDefaultClassName={false} checked={!isHistory} className="mr-1" />
              <span>Actualité</span>
            </div>
          </div>
        </div>
      </div>

      <div className='p-5'>
        <div className='pb-5'>
          <label className='uppercase'>Image {<RequiredStar/>}</label>
          <ImageUploader text_box={<UniqueImageText/>} />
        </div>
        <div className='pb-5'>
          <label className='uppercase'>Descriptions {<RequiredStar/>}</label>
          <Editor
            wrapperClassName="border border-black rounded min-h-72 "
            onChange={setEditorState}
          />
        </div>
      </div>

    </div>
  )
}
export default AddContent;