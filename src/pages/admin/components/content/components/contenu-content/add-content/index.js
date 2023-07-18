import React, { useContext, useEffect, useState } from 'react'
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { Input } from '../../../../../ui/input';
import { ImageUploader } from '../../../../../ui/image-uploader';
import { RequiredStar, RequiredText, UniqueImageText } from '../../../../../ui/texts';
import { convertFromHTML, convertToHTML } from 'draft-convert';
import SaveIcon from '../../../../../../../assets/icons/save.png'
import '/node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useForm } from 'react-hook-form';
import { ContentContext } from '../../../../../../../contexts/ContentContext';
import { IMAGE_PATH } from '../../../../../../../config/env/env';

function AddContent(props) {
  const { idToUpdate } = props
  const { contents, addContent } = useContext(ContentContext)
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty()
  );
  const [image, setImage] = useState([])
  const [currentImage, setCurrentImage] = useState(null)
  const [isValidDescription, setValidDescription] = useState(true)
  const [isHistory, setIsHistory] = useState(true)

  useEffect(() => {
    const item = contents.find(value => value.id == idToUpdate)
    if (item) {
      setValue('title', item.Content.title)
      setValue('link', item.Content.link)
      setValue('date', item.Content.date)
      setCurrentImage(IMAGE_PATH + "/pictures/images/" + item.Picture.image)
      setIsHistory(!item.Content.isActuality)
      const contentState = convertFromHTML(item.Content.description);
      const newEditorState = EditorState.createWithContent(contentState);
      setEditorState(newEditorState)
    }
  }, [idToUpdate])

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      title: '',
      link: '',
      date: '',
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
    } else {
      setValidDescription(true)
    }

    if (valid) {
      const data = {
        title: value.title,
        description: description,
        link: value.link,
        date: value.date,
        image: image.length > 0 ? image[0].file : null,
        isActuality: !isHistory
      }

      addContent(data)
    }

  }

  return (
    <form noValidate onSubmit={handleSubmit(confirmValues)}>
      <div className='flex gap-5 lg:flex-col'>
        <div className='w-1/2 lg:!w-full p-5'>

          <div className='pb-5'>
            <label className='uppercase'>Titre {<RequiredStar />}</label>
            <Input
              defaultValue={getValues('title')}
              {...register("title", { required: true })}
              onChange={(e) => setValue('title', e.target.value)}
            />
            {errors.title && <RequiredText />}
          </div>
          <div className='pb-5'>
            <label className='uppercase'>Lien vers un aperçu</label>
            <Input
              defaultValue={getValues('link')}
              {...register("link")}
              onChange={(e) => setValue('link', e.target.value)}
            />
          </div>

          <div className='pb-5'>
            <label className='uppercase'>Date de l'événement {<RequiredStar />}</label>
            <Input type="date" className="w-36 block"
              defaultValue={getValues('date')}
              {...register("date", { required: true })}
              onChange={(e) => setValue('date', e.target.value)}
            />
            {errors.date && <RequiredText />}
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
            <label className='uppercase'>Image</label>
            <div>
              {
                idToUpdate > 0 ?
                  <>
                    <img src={currentImage} alt="ENS" className='h-auto hover:scale-110 transition ease-in-out delay-150 max-w-[200px]' />
                    <button className='p-2 rounded-full bg-yellow-500'>changer</button>
                  </>
                  :
                  <ImageUploader text_box={<UniqueImageText />} updateImages={setImage} />
              }
            </div>
          </div>
          <div className='pb-5'>
            <label className='uppercase'>Descriptions {<RequiredStar />}</label>
            <Editor
              wrapperClassName="min-h-72 p-1"
              editorClassName="border border-black rounded-lg min-h-72 p-2 focus:shadow-lg "
              editorState={editorState}
              onEditorStateChange={setEditorState}
              toolbar={{
                options: ['inline', 'blockType', 'list', 'textAlign', 'history'],
                inline: {
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
            {!isValidDescription && <RequiredText />}
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