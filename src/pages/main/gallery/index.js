import React, { useState } from 'react';
import BackgroundUrl from '../../../assets/images/imgs/header.JPG';
import Header from "../layout/header";
import './styles.scss';
import DefautlImage from '../../../assets/images/vasily.jpg';
import ZoomIcon from '../../../assets/icons/search-plus.png';
import CloseIcon from '../../../assets/icons/window-close.png';

const GALLERIES = [
    { image: DefautlImage }, { image: DefautlImage }, { image: DefautlImage }, { image: DefautlImage }, { image: DefautlImage }, { image: DefautlImage },
    { image: DefautlImage }, { image: DefautlImage }, { image: DefautlImage }, { image: DefautlImage }, { image: DefautlImage },
];

export default function Gallery() {
    const [currentImage, setCurrentImage] = useState([])

    const zoomImage = (image) => {
        setCurrentImage([image])
    }
    return (
        <div className='GALLERY_STYLES'>
            <Header BackgroundUrl={BackgroundUrl}>
                <div className="overlay">
                    <div className="border p-3 title">
                        <h1>Galerie</h1>
                    </div>
                </div>
            </Header>
            <section className='!px-10 relative'>
                <div className='grid  grid-cols-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                    {
                        GALLERIES.map((img, index) => (
                            <div key={index} className='max-w-sm relative cursor-pointer image-container'>
                                <img src={img.image} alt='...' className='w-full rounded-lg' />
                                <div className='absolute box-overlay'>
                                    <div className='relative h-full'>
                                        <div className='absolute top-[47%] left-[47%] sm:top-[40%] sm:left-[40%] md:top-[40%] md:left-[40%]'>
                                            <img src={ZoomIcon} alt='zoom' className='w-10 sm:w-6 hover:scale-110 transition-all delay-150' onClick={() => zoomImage(img.image)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* MODAL */}
                {
                    currentImage.length > 0 &&
                    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                        <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex min-h-full items-end justify-center p-4 text-center items-center p-0">
                                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full h-full max-h-[80vh] object-contain">
                                    <img src={currentImage} alt='...' />
                                    <div className='absolute top-2 right-2'>
                                        <img src={CloseIcon} alt='...' className='w-8 hover:scale-110 cursor-pointer' onClick={()=>setCurrentImage([])} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </section>
        </div>
    )
}
