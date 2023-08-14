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
import { IMAGE_PATH } from '../../../../../../../config/modules';
import TrashIcon from '../../../../../../../assets/icons/trash.png'
import DatabaseIcon from '../../../../../../../assets/icons/database.png'

function AddContent(props) {
  const { idToUpdate, onHandleState } = props
  const { contents, addContent, updateContent, deletePicture } = useContext(ContentContext)
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty()
  );
  const [image, setImage] = useState([])
  const [imageList, setImageList] = useState([])
  const [isValidDescription, setValidDescription] = useState(true)
  const [isUpadte, setIsUpdate] = useState(false)
  const [isHistory, setIsHistory] = useState(true)

  useEffect(() => {
    const item = contents.find(value => value.id == idToUpdate)
    if (item) {
      const images = []
      item.Picture.forEach(img => {
        images.push(
          {
            id: img.id,
            src: IMAGE_PATH + "/pictures/images/" + img.image},
          )
        // images.push(img.image)
      });
      setImageList(images)
      setValue('title', item.Content.title)
      setValue('link', item.Content.link)
      setValue('date', item.Content.date)
      // setCurrentImage(IMAGE_PATH + "/pictures/images/" + item.Picture.image)
      setIsUpdate(true)
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
    formState: { errors },
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

  const onDeletePicture=(id)=>{
    deletePicture(id)
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
        image: image.length > 0 ? image.map(img => img.file) : null,
        isActuality: !isHistory
      }
      if (idToUpdate > 0) updateContent(idToUpdate, data, onHandleState)
      else addContent(data, onHandleState)
    }

  }

  return (
    <form noValidate onSubmit={handleSubmit(confirmValues)} className='ADD_CONTENT_STYLES shadow sm:shadow-none'>
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
          <div className='pb-5'>
            <label className='uppercase'>Descriptions {<RequiredStar />}</label>
            <Editor
              wrapperClassName="min-h-72 p-1"
              editorClassName="border border-black rounded-lg min-h-72 p-2 focus:shadow-lg"
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

        <div className='p-5 w-full'>
          <div className='pb-5'>
            <label className='uppercase'>Images</label>
            {
              isUpadte &&

              <div className='grid grid-cols-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 content-around'>
                {imageList.length > 0 && imageList.map((image, index) => (
                  <div key={index} className="bg-white shadow-lg max-w-[200px] p-3 flex flex-col justify-between">
                    <img src={image.src} alt="" className='h-auto hover:scale-110 transition-all delay-100 hover:mb-4' />
                    <div className="mt-2 flex justify-evenly gap-8">
                      <button type='button' onClick={()=>onDeletePicture(image.id)}>
                        <img src={TrashIcon} alt='delete' className='w-4' />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            }

            <div className='mt-3'>
              <ImageUploader multiple updateImages={setImage} />
            </div>

          </div>
        </div>
      </div>
      <div className='p-5 w-full flex justify-center'>
        {
          idToUpdate > 0 ?
            <button type='submit' className="bg-amber-500 p-2 text-white hover:bg-amber-300 transition-all delay-100">
              <img src={DatabaseIcon} alt='modifier' className='inline-block w-4' />
              <span className='inline-block ml-1'>modifier</span>
            </button>
            :
            <button type='submit' className="bg-greencolor p-2 text-white hover:bg-green-500 transition-all delay-100">
              <img src={SaveIcon} alt='enregistrer' className='inline-block w-4' />
              <span className='inline-block ml-1'>enregistrer</span>
            </button>
        }
      </div>
    </form>
  )
}
export default AddContent;