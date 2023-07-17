import React, { useState } from 'react'
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { Input } from '../../../../../ui/input';
import { ImageUploader } from '../../../../../ui/image-uploader';
import { RequiredStar, UniqueImageText } from '../../../../../ui/texts';
import { convertToHTML } from 'draft-convert';
import SaveIcon from '../../../../../../../assets/icons/save.png'
import '/node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useForm } from 'react-hook-form';

function AddContent() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty()
  );
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      title: '',
      link: '',
      date: '',
      link: '',
    }
  })

  const [isHistory, setIsHistory] = useState(true)

  const onChangeEvent = (value) => {
    setIsHistory(value)
  }
  const getValue = (value) => {
    const html = convertToHTML(editorState.getCurrentContent());
    console.log("VALUE ", value);
  }

  return (
    <form noValidate onSubmit={handleSubmit(getValue)}>
      <div className='flex gap-5 lg:flex-col'>
        <div className='w-1/2 lg:!w-full p-5'>

          <div className='pb-5'>
            <label className='uppercase'>Titre {<RequiredStar />}</label>
            <Input
              {...register("title", { required: true })}
              onChange={(e) => setValue('title', e.target.value)}
            />
            {errors.title && <span>This field is required</span>}
          </div>
          <div className='pb-5'>
            <label className='uppercase'>Lien vers un aperçu</label>
            <Input
              {...register("link")}
              onChange={(e) => setValue('link', e.target.value)}
            />
          </div>

          <div className='pb-5'>
            <label className='uppercase'>Date de l'événement {<RequiredStar />}</label>
            <Input type="date" className="w-36 block"
              {...register("date", { required: true })}
              onChange={(e) => setValue('date', e.target.value)}
            />
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
            <label className='uppercase'>Image {<RequiredStar />}</label>
            <ImageUploader text_box={<UniqueImageText />} />
          </div>
          <div className='pb-5'>
            <label className='uppercase'>Descriptions {<RequiredStar />}</label>
            <Editor
              wrapperClassName="border border-black rounded min-h-72 "
              editorState={editorState}
              onEditorStateChange={setEditorState}
            />
          </div>
        </div>
      </div>
      <div className='p-5 w-full flex justify-center'>
        <button type='submit' className="bg-greencolor p-2 rounded-lg text-white hover:bg-green-500">
          <img src={SaveIcon} alt='enregistrer' className='inline-block w-4' />
          <span className='inline-block ml-1'>enregistrer</span>
        </button>
      </div>
    </form>
  )
}
export default AddContent;