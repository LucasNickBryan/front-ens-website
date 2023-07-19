import { createContext, useState } from "react";
import ContentServices from "../services/Content.services";
import DefaultImage from '../assets/icons/image.png'

export const ContentContext = createContext(null)

export const ContentProvider = ({ children }) => {
    const [data, setData] = useState([{
        id:1,
        Content:{
            title:"Fake Title",
            link:"Fake link",
            date:"2023-04-02",
            isActuality: true,
            description: "<p>Fake description</p>",
        },
        Picture:{
            image:DefaultImage
        }
    }])
    let service = ContentServices

    const fetchContent = () => {
        service.get()
            .then((res) => {
                setData(res.data.data)
            },
            err=>{
                console.log("ERROR ", err.message);
            }
            )
    }

    const addContent = (credential) => {
        service.post(credential)
            .then((res) => {
                console.log("SUCCESS ", res.data.data);
                fetchContent()
            },
                err => { console.log("FAILED OPERATION", err.message); }
            )
    }

    const updateContent = (id, credential) => {
        service.put(id, credential)
            .then((res) => {
                console.log("SUCCESS ", res.data.data);
                fetchContent()
            },
                err => { console.log("FAILED OPERATION", err.message); }
            )
    }

    const deleteContent = (id) => {
        service.delete(id)
            .then((res) => {
                console.log("SUCCESS ", res.data.data);
                fetchContent()
            },
                err => { console.log("FAILED OPERATION", err.message); }
            )
    }

    return (
        <ContentContext.Provider value={{ contents: data, fetchContent, addContent, updateContent, deleteContent }} >
            {children}
        </ContentContext.Provider>
    )
}