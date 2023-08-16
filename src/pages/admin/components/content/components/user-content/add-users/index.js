import React, { useContext, useEffect, useState } from 'react'
import { Input } from '../../../../../ui/input'
import { ImageUploader } from '../../../../../ui/image-uploader'
import { RequiredStar, RequiredText, UniqueImageText } from '../../../../../ui/texts'
import SelectUi from '../../../../../ui/select'
import { UserContext } from '../../../../../../../contexts/UserContext'
import { Controller, useForm } from 'react-hook-form'
import { IMAGE_PATH } from '../../../../../../../config/modules'
import SaveIcon from '../../../../../../../assets/icons/save.png'
import DatabaseIcon from '../../../../../../../assets/icons/database.png'
import InputPassword from '../../../../../ui/password-button'

const OPTIONS = [
  { value: "administrateur", label: 'administrateur' },
  { value: "utilisateur", label: 'utilisateur' },
];

export default function AddUser(props) {
  const { idToUpdate, onHandleState } = props
  const { users, user, updateUser, signUpUser } = useContext(UserContext)
  const [image, setImage] = useState([])
  const [currentImage, setCurrentImage] = useState(null)
  const [isUpadte, setIsUpdate] = useState(false)
  const [role, setRole] = useState(null)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(true)

  useEffect(() => {
    const item = users.find(value => value.id == idToUpdate)
    if (item) {
      setValue('username', item.username)
      setValue('role', item.role)
      setValue('email', item.email)
      setCurrentImage(item.avatar ? item.avatar : null)
      setRole({ value: item.role, label: item.role })
      setIsUpdate(true)
    }
  }, [idToUpdate])

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm(
    {
      defaultValues: {
        username: '',
        email: '',
        role: '',
      }
    }
  )


  const onChangeSelect = (value) => {
    setRole(value)
    setValue('role', value.value)
  }

  const confirmValues = (value) => {
    let valid = true;
    if ((idToUpdate == 0) && value.confirm_password !== value.password) {
      valid = false;
      setIsValidPassword(false)
    }
    else setIsValidPassword(true)

    if (valid) {
      const data = {
        username: value.username,
        password: value.password,
        email: value.email,
        role: value.role,
        avatar: image.length > 0 ? image[0].file : currentImage,
      }

      if (idToUpdate > 0) updateUser(idToUpdate, data, onHandleState)
      else signUpUser(data, onHandleState)
    }


  }

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const FormValue = () => {
    return (
      <form noValidate onSubmit={handleSubmit(confirmValues)} className='w-1/2 lg:!w-full p-5 shadow sm:shadow-none border rounded-lg'>
        <div className='pb-5'>
          <label className='uppercase'>photo</label>
          {
            isUpadte &&
            <div>
              <img src={IMAGE_PATH + "/staffs/images/" + currentImage} alt="illustration" className="max-w-[200px] mx-auto" />
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
          <label className='uppercase'>nom d'utilisateur {<RequiredStar />}</label>
          <Input
            defaultValue={getValues('username')}
            {...register("username", { required: true })}
            onChange={(e) => setValue('username', e.target.value)}
          />
          {errors.username && <RequiredText />}
        </div>
        <div className='pb-5'>
          <label className='uppercase'>email {<RequiredStar />}</label>
          <Input
            type="email"
            defaultValue={getValues('email')}
            {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })}
            onChange={(e) => setValue('email', e.target.value)}
          />
          {errors.email && <RequiredText />}
        </div>
        <div className='pb-5'>
          <label className='uppercase'>rôle {<RequiredStar />}</label>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <SelectUi value={value} options={OPTIONS} defaultValue={role} onChange={onChange} onChangeSelect={onChangeSelect} />

            )}
            name="role"
          />
          {errors.role && <RequiredText />}
        </div>

        {
          !idToUpdate > 0 &&
          <>
            <div className='pb-5'>
              <label className='uppercase'>mot de passe {<RequiredStar />}</label>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <InputPassword
                    onChange={onChange}
                    value={value}
                    isPasswordVisible={isPasswordVisible}
                    togglePasswordVisibility={togglePasswordVisibility} />
                )}
                name="password"
              />
              {errors.password && <RequiredText />}
            </div>

            <div className='pb-5'>
              <label className='uppercase'>mot de passe {<RequiredStar />}</label>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <InputPassword
                    onChange={onChange}
                    value={value}
                    isPasswordVisible={isPasswordVisible}
                    togglePasswordVisibility={togglePasswordVisibility} />
                )}
                name="confirm_password"
              />
              {errors.confirm_password && <RequiredText />}
            </div>

            <div>
              {
                !isValidPassword && <RequiredText text={"Les mots de passe ne sont pas identiques !"} />
              }

            </div>
          </>
        }
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

  return (
    <div className='flex gap-5 justify-center'>
      {
        user?.role == "administrateur" ?
          FormValue()
          :
          (
            idToUpdate > 0 ? FormValue() 
            :
          <div className='bg-yellow-500 text-white p-3 rounded mt-5'>
            <i className='fa fa-shield-alt' />
            <span className='ml-2 text-lg font-bold'>Vous n'avez pas le privilège d'effectuer cette action !</span>
            <div className='text-center'>Veuillez contacter l'administrateur du site.</div>
          </div>
          )
      }
    </div>
  )
}