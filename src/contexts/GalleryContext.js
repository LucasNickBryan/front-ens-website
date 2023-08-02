import { createContext, useState } from "react";
import GalleryServices from "../services/Gallery.services";
import DefaultImage from '../assets/icons/image.png'
import { notify } from "../pages/ui/Notification";

export const GalleryContext = createContext(null)

export const GalleryProvider = ({ children }) => {
    const [data, setData] = useState([
        // {
        //     id: 1,
        //     image: DefaultImage,
        //     isPrincipal: false,
        // },
        // {
        //     id: 2,
        //     image: DefaultImage,
        //     isPrincipal: false,
        // },
        // {
        //     id: 3,
        //     image: DefaultImage,
        //     isPrincipal: false,
        // },
        // {
        //     id: 4,
        //     image: DefaultImage,
        //     isPrincipal: false,
        // },
    ])
    let service = GalleryServices

    const fetchGallery = () => {
        service.get()
            .then((res) => {
                setData(res.data.data)
            })
            .catch(err=>console.log("ERROR ", err))
    }

    const addGallery = (credential) => {
        notify(
            service.post(credential)
                .then((res) => {
                    fetchGallery()
                },
                )
        )
    }

    const updateGallery = (id) => {
        notify(
            service.put(id)
                .then((res) => {
                    fetchGallery()
                },
                )
        )
    }

    const deleteGallery = (id) => {
        notify(
            service.delete(id)
                .then((res) => {
                    fetchGallery()
                },
                )
        )
    }

    return (
        <GalleryContext.Provider value={{ galleries: data, fetchGallery, addGallery, updateGallery, deleteGallery }} >
            {children}
        </GalleryContext.Provider>
    )
}