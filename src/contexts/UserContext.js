import { createContext, useState } from "react";
import UserServices from "../services/User.services";
import DefaultImage from '../assets/icons/image.png'
import { useNavigate } from "react-router-dom";

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
    let navigate = useNavigate()
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
        service.disable(id)
            .then((res) => {
                console.log("SUCCESS ", res.data);
                fetchUser()
            },
                err => {
                    console.log("ERROR ", err.message);
                }
            )
    }

    const signUpUser = (credential) => {
        service.signup(credential)
            .then((res) => {
                console.log("SUCCESS ", res.data);
                fetchUser()
            },
                err => { console.log("FAILED OPERATION", err.message); }
            )
    }

    const signInUser = (credential) => {
        service.signin(credential)
            .then((res) => {
                console.log("SUCCESS ", res.data);
                localStorage.setItem("user_token", res.data);
                navigate("/admin/");
            },
                err => { console.log("FAILED OPERATION", err.message); }
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
        service.post(credential)
            .then((res) => {
                fetchUser()
            },
                err => { console.log("FAILED OPERATION", err.message); }
            )
    }

    const updateUser = (id, credential) => {
        service.put(id, credential)
            .then((res) => {
                console.log("SUCCESS ", res.data);
                fetchUser()
            },
                err => { console.log("FAILED OPERATION", err.message); }
            )
    }

    const deleteUser = (id) => {
        service.delete(id)
            .then((res) => {
                console.log("SUCCESS ", res.data);
                fetchUser()
            },
                err => { console.log("FAILED OPERATION", err.message); }
            )
    }

    return (
        <UserContext.Provider value={{ users: data, fetchUser, disableUser, addUser, signUpUser, signInUser, updateUser, logout, deleteUser }} >
            {children}
        </UserContext.Provider>
    )
}