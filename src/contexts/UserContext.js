import { createContext, useEffect, useState } from "react";
import UserServices from "../services/User.services";
import DefaultImage from '../assets/icons/image.png'
import { useNavigate } from "react-router-dom";
import { notify } from "../pages/ui/Notification";

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
    let navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [data, setData] = useState([
        // {
        //     id: 1,
        //     username: "John Doe",
        //     email: "john@gmail.com",
        //     avatar: null,
        //     isActive: true,
        //     role: "administrateur",
        // },
    ])
    let service = UserServices

    useEffect(()=>{
        service.getUser()
        .then((res)=>{ console.log(res.data);setUser(res.data)})
        .catch(err=>console.log("ERROR ", err))
    },[])

    const fetchUser = () => {
        service.get()
            .then((res) => {
                setData(res.data)
            },
                err => {
                    console.log("ERROR ", err.message);
                }
            )
    }

    const disableUser = (id) => {
        notify(
            service.disable(id)
                .then((res) => {
                    fetchUser()
                },
                )
        )
    }

    const signUpUser = (credential) => {
        notify(
            service.signup(credential)
                .then((res) => {
                    fetchUser()
                },
                )
        )
    }
    const signInUser = (credential) => {
        notify(
            service.signin(credential)
                .then((res) => {
                    localStorage.setItem("user_token", res.data);
                    navigate("/admin/");
                }),
        )
    }

    const logout = () => {
        localStorage.removeItem("user_token");
        navigate("/sign-in");
        // service.logout()
        //     .then((res) => {
        //         console.log("SUCCESS ", res.data);
        //         localStorage.setItem("user_token", res.data);
        //         navigate("/admin/");
        //     },
        //         err => { console.log("FAILED OPERATION", err.message); }
        //     )
    }

    const addUser = (credential) => {
        notify(
            service.post(credential)
                .then((res) => {
                    fetchUser()
                },
                )
        )
    }

    const updateUser = (id, credential) => {
        notify(
            service.put(id, credential)
                .then((res) => {
                    fetchUser()
                },
                )
        )
    }

    const deleteUser = (id) => {
        notify(
            service.delete(id)
                .then((res) => {
                    fetchUser()
                },
                )
        )
    }

    return (
        <UserContext.Provider value={{ users: data, user, fetchUser, disableUser, addUser, signUpUser, signInUser, updateUser, logout, deleteUser }} >
            {children}
        </UserContext.Provider>
    )
}