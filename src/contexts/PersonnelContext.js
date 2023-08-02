import { createContext, useState } from "react";
import PersonnelServices from "../services/Personnel.services";
import DefaultImage from '../assets/icons/image.png'
import { notify } from "../pages/ui/Notification";

export const PersonnelContext = createContext(null)

export const PersonnelProvider = ({ children }) => {
    const [data, setData] = useState([
        // {
        //     id: 1,
        //     name: "John Doe",
        //     avatar: DefaultImage,
        //     description: "Lorem upsum",
        //     year: "2023-2024",
        //     occupationId: 2,
        //     Occupation:{
        //         name:"Président",
        //     }
        // },
    ])
    let service = PersonnelServices

    const fetchPersonnel = () => {
        service.get()
            .then((res) => {
                setData(res.data)
            },
                err => {
                    console.log("ERROR ", err.message);
                }
            )
    }

    const addPersonnel = (credential) => {
        notify(
            service.post(credential)
                .then((res) => {
                    fetchPersonnel()
                },
                )
        )
    }

    const updatePersonnel = (id, credential) => {
        notify(
            service.put(id, credential)
                .then((res) => {
                    fetchPersonnel()
                },
                )
        )
    }

    const deletePersonnel = (id) => {
        notify(
            service.delete(id)
                .then((res) => {
                    fetchPersonnel()
                },
                )
        )
    }

    return (
        <PersonnelContext.Provider value={{ personnels: data, fetchPersonnel, addPersonnel, updatePersonnel, deletePersonnel }} >
            {children}
        </PersonnelContext.Provider>
    )
}