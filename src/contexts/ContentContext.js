import { createContext, useState } from "react";
import ContentServices from "../services/Content.services";
import DefaultImage from '../assets/icons/image.png'
import { notify } from "../pages/ui/Notification";

export const ContentContext = createContext(null)

export const ContentProvider = ({ children }) => {
    const [data, setData] = useState([
        {
            id: 1,
            Content: {
                title: "Fake Title",
                link: "Fake link",
                date: "2023-04-02",
                isActuality: true,
                description: "<p>Fake description</p>",
            },
            Picture: [
                { image: DefaultImage },
                { image: DefaultImage },
                { image: DefaultImage },
                { image: DefaultImage },
            ]
        }
    ])
    let service = ContentServices

    const fetchContent = () => {
        service.get()
            .then((res) => {
                setData(res.data.data)
            })
            .catch(err => { console.log("ERROR ", err); })
    }

    const addContent = (credential, callback_fn = () => { }) => {
        notify(
            service.post(credential)
                .then(() => {
                    fetchContent()
                    callback_fn()
                },
                )
        )
    }

    const updateContent = (id, credential, callback_fn = () => { }) => {
        notify(
            service.put(id, credential)
                .then((res) => {
                    fetchContent()
                    callback_fn()
                },
                )
        )
    }

    const deleteContent = (id) => {
        notify(
            service.delete(id)
                .then((res) => {
                    fetchContent()
                },
                    err => { console.log("FAILED OPERATION", err.message); }
                )
        )
    }

    return (
        <ContentContext.Provider value={{ contents: data, fetchContent, addContent, updateContent, deleteContent }} >
            {children}
        </ContentContext.Provider>
    )
}