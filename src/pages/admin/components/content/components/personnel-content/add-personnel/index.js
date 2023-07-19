import React, { useContext, useEffect, useState } from 'react'
import { Input } from '../../../../../ui/input'
import { ImageUploader } from '../../../../../ui/image-uploader'
import { RequiredStar, RequiredText, UniqueImageText } from '../../../../../ui/texts'
import SelectUi from '../../../../../ui/select'
import { PersonnelContext } from '../../../../../../../contexts/PersonnelContext'
import { useForm } from 'react-hook-form'
import SaveIcon from '../../../../../../../assets/icons/save.png'
import { IMAGE_PATH } from '../../../../../../../config/modules'
import FunctionServices from '../../../../../../../services/Function.services'

export default function AddPersonnel(props) {
  const { idToUpdate } = props
  const { personnels, addPersonnel, updatePersonnel, deletePersonnel } = useContext(PersonnelContext)
  const [image, setImage] = useState([])
  const [currentImage, setCurrentImage] = useState(null)
  const [isUpadte, setIsUpdate] = useState(false)
  const [fonctions, setFonctions] =useState([])
  const [fonctionId, setFonctionId] = useState(null)

  useEffect(() => {
    const item = personnels.find(value => value.id == idToUpdate)
    console.log("FUNCTION ", item);
    if (item) {
      setValue('nom', item.name)
      setValue('description', item.description)
      setValue('year', item.year)
      setValue('functionId', item.occupationId)
      setCurrentImage(IMAGE_PATH + "/staffs/images/" + item.avatar)
      // setCurrentImage(item.avatar)
      setFonctionId({value:item.Occupation.id, label:item.Occupation.name})
      setIsUpdate(true)
    }
  }, [idToUpdate])

  useEffect(()=>{
    FunctionServices.get()
    .then(res=>{
      const formated_functions = []
      res.data.forEach(item => {
        const value = {
          value: item.id,
          label: item.name
        }
        formated_functions.push(value)
      });
      setFonctions(formated_functions)
    },
    err=>{ console.log("ERROR"); }
    )
  },[])

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      nom: '',
      description: '',
      year: '',
      functionId: '',
    }
  })

  const confirmValues = (value) => {
    const data = {
      name: value.nom,
      description: value.description,
      year: value.year,
      occupation: fonctionId.value,
      avatar: image.length > 0 ? image[0].file : null,
    }

    console.log("DATA ", data);

    if (idToUpdate > 0) updatePersonnel(idToUpdate, data)
    else addPersonnel(data)

  }

  return (
    <div className='flex gap-5 justify-center'>
      <form noValidate onSubmit={handleSubmit(confirmValues)} className='w-1/2 lg:!w-full p-5 shadow sm:shadow-none rounded-lg'>

        <div className='pb-5'>
          <label className='uppercase'>photo</label>
          {
            isUpadte &&
            <div>
              <img src={currentImage} alt="illustration" className="max-w-[200px] mx-auto" />
              <div className='flex justify-center'>
                <button className='p-1 px-2 bg-white shadow-lg border border-1 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white transition-all delay-100'
                  onClick={() => setIsUpdate(prev => !prev)}>changer l'image</button>
              </div>
            </div>
          }

          {
            !isUpadte &&
            <div>
              <ImageUploader text_box={<UniqueImageText />} updateImages={setImage} />
              {
                idToUpdate > 0 &&
                <div className='flex justify-center mt-1'>
                  <button className='p-1 px-2 bg-white shadow-lg border border-1 border-redcolor text-redcolor hover:bg-redcolor hover:text-white transition-all delay-100'
                    onClick={() => { setIsUpdate(prev => !prev); setImage([]) }}>annuler</button>
                </div>
              }
            </div>
          }
        </div>
        <div className='pb-5'>
          <label className='uppercase'>nom {<RequiredStar />}</label>
          <Input
            defaultValue={getValues('nom')}
            {...register("nom", { required: true })}
            onChange={(e) => setValue('nom', e.target.value)}
          />
          {errors.nom && <RequiredText />}
        </div>
        <div className='pb-5'>
          <label className='uppercase'>descritpions {<RequiredStar />}</label>
          <textarea rows={2} className="w-full shadow-md border border-black-100 rounded p-1 mb-2 focus:shadow-greencolor"
            defaultValue={getValues('description')}
            {...register("description", { required: true })}
          ></textarea>
          {errors.description && <RequiredText />}
        </div>
        <div className='pb-5'>
          <label className='uppercase'>année {<RequiredStar />}</label>
          <Input
            defaultValue={getValues('year')}
            {...register("year", { required: true })}
            onChange={(e) => setValue('year', e.target.value)}
          />
          {errors.year && <RequiredText />}
        </div>
        <div className='pb-5'>
          <label className='uppercase'>fonction {<RequiredStar />}</label>
          <SelectUi options={fonctions} onChangeSelect={setFonctionId} defaultValue={fonctionId}/>
        </div>
        <div className='p-5 w-full flex justify-center'>
          <button type='submit' className="bg-greencolor p-2 text-white hover:bg-green-500 transition-all delay-100">
            <img src={SaveIcon} alt='enregistrer' className='inline-block w-4' />
            <span className='inline-block ml-1'>enregistrer</span>
          </button>
        </div>
      </form>

    </div>
  )
}
