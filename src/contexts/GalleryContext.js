import { createContext, useState } from "react";
import GalleryServices from "../services/Gallery.services";
import DefaultImage from '../assets/icons/image.png'

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
            },
                err => {
                    console.log("ERROR ", err.message);
                }
            )
    }

    const addGallery = (credential) => {
        service.post(credential)
            .then((res) => {
                console.log("SUCCESS ", res.data);
                fetchGallery()
            },
                err => { console.log("FAILED OPERATION", err.message); }
            )
    }

    const updateGallery = (id) => {
        service.put(id)
            .then((res) => {
                console.log("SUCCESS ", res.data.data);
                fetchGallery()
            },
                err => { console.log("FAILED OPERATION", err.message); }
            )
    }

    const deleteGallery = (id) => {
        service.delete(id)
            .then((res) => {
                console.log("SUCCESS ", res.data.data);
                fetchGallery()
            },
                err => { console.log("FAILED OPERATION", err.message); }
            )
    }

    return (
        <GalleryContext.Provider value={{ galleries: data, fetchGallery, addGallery, updateGallery, deleteGallery }} >
            {children}
        </GalleryContext.Provider>
    )
}