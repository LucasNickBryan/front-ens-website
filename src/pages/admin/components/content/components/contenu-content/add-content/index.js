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
  const [image, setImage] = useState([])
  const [isValidDescription, setValidDescription] = useState(true)
  const [isHistory, setIsHistory] = useState(true)
  const {
    register,
    handleSubmit,
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


  const onChangeEvent = (value) => {
    setIsHistory(value)
  }
  const confirmValues = (value) => {
    let valid = true;
    const description = convertToHTML(editorState.getCurrentContent());
    if (description == "<p></p>") {
      valid = false;
      setValidDescription(false)
    }
    (image.length > 0) && setImage(img => img[0].file)

    if (valid) {
      const data = {
        title: value.title,
        description: description,
        link: value.link,
        date: value.date,
        image: image[0].file,
        isActuality: !isHistory
      }
    }

  }

  return (
    <form noValidate onSubmit={handleSubmit(confirmValues)}>
      <div className='flex gap-5 lg:flex-col'>
        <div className='w-1/2 lg:!w-full p-5'>

          <div className='pb-5'>
            <label className='uppercase'>Titre {<RequiredStar />}</label>
            <Input
              {...register("title", { required: true })}
              onChange={(e) => setValue('title', e.target.value)}
            />
            {errors.title && <span className='text-redcolor'>vous devez remplir ce champ</span>}
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
            <ImageUploader text_box={<UniqueImageText />} updateImages={setImage} />
          </div>
          <div className='pb-5'>
            <label className='uppercase'>Descriptions {<RequiredStar />}</label>
            <Editor
              wrapperClassName="border border-black rounded min-h-72 "
              editorState={editorState}
              onEditorStateChange={setEditorState}
              toolbar={{
                options: ['inline', 'blockType', 'list', 'textAlign', 'history'],
                inline: {
                  inDropdown: false,
                  className: undefined,
                  component: undefined,
                  dropdownClassName: undefined,
                  options: ['bold', 'italic', 'underline', 'superscript', 'subscript'],
                },
                blockType: {
                  inDropdown: true,
                  options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
                },
                textAlign: {
                  inDropdown: false,
                  className: undefined,
                  component: undefined,
                  dropdownClassName: undefined,
                  options: ['left', 'center', 'right', 'justify'],
                },
              }}
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