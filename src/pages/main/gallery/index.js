import React, { useEffect, useState } from 'react';
import BackgroundUrl from '../../../assets/images/imgs/header.JPG';
import Header from "../layout/header";
import './styles.scss';
import DefautlImage from '../../../assets/images/vasily.jpg';
import ZoomIcon from '../../../assets/icons/search-plus.png';
import CloseIcon from '../../../assets/icons/window-close.png';
import Animation from '../../ui/Animation';
import $ from 'jquery';
import GalleryServices from '../../../services/Gallery.services';
import { IMAGE_PATH } from '../../../config/modules';

const GALLERIES = [
    { image: DefautlImage }, { image: DefautlImage }, { image: DefautlImage }, { image: DefautlImage }, { image: DefautlImage }, { image: DefautlImage },
    { image: DefautlImage }, { image: DefautlImage }, { image: DefautlImage }, { image: DefautlImage }, { image: DefautlImage },
];

export default function Gallery() {
    const [currentImage, setCurrentImage] = useState([])
    const [galleries, setGalleries] = useState([])

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });

        GalleryServices.get()
            .then(res => {
                const gallery_images = []
                res.data.data.forEach(img => {
                    gallery_images.push({ image: IMAGE_PATH + "/pictures/images/" + img.image })
                });
                setGalleries(gallery_images)
            })
            .catch(err => { console.log("ERROR ", err); })
    }, [])

    const zoomImage = (image) => {
        setCurrentImage([image])
        $('.gallery-zoom').fadeToggle(300);
    }
    return (
        <div className='GALLERY_STYLES'>
            <Header />
            <section className='!px-10 relative'>
                <div className='grid  grid-cols-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                    {
                        galleries.length > 0 && galleries.map((img, index) => (
                            <div key={index} className='max-w-sm relative cursor-pointer image-container'>
                                <Animation random={true}>
                                    <img src={img.image} alt='...' className='w-full h-56 object-cover rounded-lg' />
                                </Animation>
                                <div className='absolute box-overlay'>
                                    <div className='relative h-full'>
                                        <div className='absolute top-[45%] left-[47%] sm:top-[40%] sm:left-[40%] md:top-[40%] md:left-[40%]'>
                                            <img src={ZoomIcon} alt='zoom' className='w-10 sm:w-6 hover:scale-110 transition-all delay-150' onClick={() => zoomImage(img.image)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* MODAL */}
                <div className="relative z-10 gallery-zoom hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center items-center p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full h-full max-h-[80vh] object-contain">
                                <img src={currentImage} alt='...' className='w-full h-full object-cover' />
                                <div className='absolute top-2 right-2'>
                                    <img src={CloseIcon} alt='...' className='w-8 hover:scale-110 cursor-pointer' onClick={() => { $('.gallery-zoom').fadeToggle(300) }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
