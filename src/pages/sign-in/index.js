import React, { useEffect } from 'react'
import './styles.scss'
import Bg from '../../assets/brand/bg.svg'
import Avatar from '../../assets/brand/avatar.svg'
import { Controller, useForm } from 'react-hook-form';
import { RequiredText } from '../admin/ui/texts';

export default function SignIn() {
    // INPUT FUNCTIONS
    useEffect(()=>{
        const inputs = document.querySelectorAll(".input");
        function addcl() {
            let parent = this.parentNode.parentNode;
            parent.classList.add("focus");
        }
        function remcl() {
            let parent = this.parentNode.parentNode;
            if (this.value == "") {
                parent.classList.remove("focus");
            }
        }
        inputs.forEach(input => {
            input.addEventListener("focus", addcl);
            input.addEventListener("blur", remcl);
        });
    },[])
    // ------------------------------------------------------

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm(
        {
            defaultValues: {
                username: '',
                password: '',
            }
        }
    )

    const confirmValues = (value) => {
        const data = {
            username: value.username,
            password: value.password,
        }
        console.log("DATA ", data);

    }

    return (
        <div className='SIGN_IN_STYLES'>
            <div className="container bg-teal-100">
                <div className="img">
                    <img src={Bg} />
                </div>
                <div className="login-content">
                    <form noValidate className='shadow bg-white rounded-lg !p-4 !h-[500px] !w-[400px] xs:!w-full' onSubmit={handleSubmit(confirmValues)}>
                        <div className='flex flex-col !mb-8'>
                            <img src={Avatar} />
                            <h3 className="title">CONNEXION</h3>
                        </div>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <h5>Nom d'utilisateur</h5>
                                <input type="text" className="input" {...register("username", { required: true })}/>
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <h5>Mot de passe</h5>
                                <input type="password" className="input" {...register("password", { required: true })} />
                            </div>
                        </div>
                        <a href="#">Forgot Password?</a>
                        <div className='!mt-16'>
                            <input type="submit" className="btn" value="Se connecter" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
