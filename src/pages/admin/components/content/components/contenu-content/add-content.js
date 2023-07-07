import React, { useState } from 'react'
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '/node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Input } from '../../../../ui/input';

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
          <label className='uppercase'>Titre</label>
          <Input value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className='pb-5'>
          <label className='uppercase'>Lien vers un aperçu</label>
          <Input value={link}  onChange={e => setLink(e.target.value)} />
        </div>

        <div className='pb-5'>
          <label className='uppercase'>Date de l'événement</label>
          <Input type="date" className="w-36 block"  value={date}  onChange={e => setDate(e.target.value)}  />
        </div>

        <div className='pb-5'>
          <label className='uppercase'>Type de l'événement</label>
          <div className='flex gap-5 sm:flex-col'>
            <div className='border border-black-100 w-40 p-4 rounded cursor-pointer' onClick={() => onChangeEvent(true)}>
              <Input type="radio" useDefaultClassname={false} className="mr-1" checked={isHistory} />
              <span>Historique</span>
            </div>
            <div className='border border-black-100 w-40 p-4 rounded cursor-pointer' onClick={() => onChangeEvent(false)}>
              <Input type="radio" useDefaultClassname={false} checked={!isHistory} className="mr-1" />
              <span>Actualité</span>
            </div>
          </div>
        </div>
      </div>

      <div className='p-5'>
        <div className='pb-5'>
          <label className='uppercase'>Descriptions</label>
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