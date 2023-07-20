import { createContext, useState } from "react";
import UserServices from "../services/User.services";
import DefaultImage from '../assets/icons/image.png'

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
    const [data, setData] = useState([
        {
            id: 1,
            username: "John Doe",
            avatar: null,
            role: "administrateur",
        },
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

    const addUser = (credential) => {
        service.post(credential)
            .then((res) => {
                console.log("SUCCESS ", res.data);
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
        <UserContext.Provider value={{ users: data, fetchUser, addUser, updateUser, deleteUser }} >
            {children}
        </UserContext.Provider>
    )
}