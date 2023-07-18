import { createContext, useState } from "react";
import ContentServices from "../services/Content.services";

export const ContentContext = createContext(null)

export const ContentProvider = ({ children })=>{
    const [data, setData] = useState([])
    let service = ContentServices

    const fetchContent = ()=>{
        service.get()
        .then((res)=>{
            setData(res.data.data)
        })
    }

    const addContent = (credential)=>{
        service.post(credential)
        .then((res)=>{
            console.log("SUCCESS ", res.data.data);
            fetchContent()
        },
        err=>{ console.log("FAILED OPERATION");}
        )
    }

    const deleteContent = (id)=>{
        service.delete(id)
        .then((res)=>{
            console.log("SUCCESS ", res.data.data);
            fetchContent()
        },
        err=>{ console.log("FAILED OPERATION");}
        )
    }

    return(
        <ContentContext.Provider value={{ contents:data, fetchContent, addContent, deleteContent }} >
            {children}
        </ContentContext.Provider>
    )
}