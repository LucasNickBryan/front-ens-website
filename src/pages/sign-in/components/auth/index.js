import React, { useContext, useEffect } from 'react'
import './styles.scss'
import Bg from '../../../../assets/brand/bg.svg'
import Avatar from '../../../../assets/brand/avatar.svg'
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export default function AuthPage() {
    const { signInUser } = useContext(UserContext)
    let navigate = useNavigate()
    
    // INPUT FUNCTIONS
    useEffect(() => {

        localStorage.getItem("user_token") && navigate("/admin");

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
    }, [])
    // ------------------------------------------------------

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm(
        {
            defaultValues: {
                email: '',
                password: '',
            }
        }
    )

    const confirmValues = (value) => {
        const data = {
            email: value.email,
            password: value.password,
        }
        signInUser(data);
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
                                <h5>Email</h5>
                                <input type="email" className="input" {...register("email", { required: true })} />
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
