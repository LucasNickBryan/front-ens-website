import { createContext, useState } from "react";
import ContentServices from "../services/Content.services";

export const ContentContext = createContext(null)

export const ContentProvider = ({ children })=>{
    const [data, setData] = useState([{
        id:1,
        image: null,
        title: 'Réception Novices',
        date: "08/06/2023",
        description: "lorem upsum",
        isActuality: false,
        link: "www.facebook.com/AEENS/actu"
    }])
    let service = ContentServices

    const fetchContent = ()=>{
        service.get()
        .then((res)=>{
            setData(res.data)
        })
    }

    const addContent = (credential)=>{
        // service.post(credential)
        // .then((res)=>{
        //     //
        // })

        // test data
        let values = [...data]
        const last_data = data.pop()
        values.push({id:last_data.id+1, ...credential})
        setData(values)
    }

    return(
        <ContentContext.Provider value={{ contents:data, fetchContent, addContent }} >
            {children}
        </ContentContext.Provider>
    )
}