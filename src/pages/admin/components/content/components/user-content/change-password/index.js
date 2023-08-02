import React, { useContext, useState } from 'react'
import DatabaseIcon from '../../../../../../../assets/icons/database.png'
import InputPassword from '../../../../../ui/password-button'
import { Controller, useForm } from 'react-hook-form'
import { RequiredStar, RequiredText } from '../../../../../ui/texts'
import { UserContext } from '../../../../../../../contexts/UserContext'

export default function ChangeUserPassword() {
    const [isValidPassword, setIsValidPassword] = useState(true)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const {updatePassword} = useContext(UserContext)

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        control,
        formState: { errors },
    } = useForm()

    const confirmValues = (value) => {
        let valid = true;
        if (value.confirm_password !== value.new_password) {
            valid = false;
            setIsValidPassword(false)
        }

        if (valid) {
            const data = {
                current_password: value.password,
                new_password: value.new_password,
            }
            updatePassword(data)
            console.log("DATA ", data);
        }


    }

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }
    return (
        <div className='flex gap-5 justify-center'>
            <form noValidate onSubmit={handleSubmit(confirmValues)} className='w-1/2 lg:!w-full p-5 shadow sm:shadow-none border rounded-lg'>

                <>
                    <div className='pb-5'>
                        <label className='uppercase'>ancien mot de passe {<RequiredStar />}</label>
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
                        <label className='uppercase'>nouveau mot de passe {<RequiredStar />}</label>
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
                            name="new_password"
                        />
                        {errors.new_password && <RequiredText />}
                    </div>

                    <div className='pb-5'>
                        <label className='uppercase'>confirmer mot de passe {<RequiredStar />}</label>
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
                            !isValidPassword && <RequiredText text={"Nouveau mot de passe et confirmer mot de passe ne sont pas identiques !"} />
                        }

                    </div>
                </>
                <div className='p-5 w-full flex justify-center'>
                    <button type='submit' className="bg-amber-500 p-2 text-white hover:bg-amber-300 transition-all delay-100">
                        <img src={DatabaseIcon} alt='modifier' className='inline-block w-4' />
                        <span className='inline-block ml-1'>modifier</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
