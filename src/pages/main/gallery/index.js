import React from 'react';
import BackgroundUrl from '../../../assets/images/imgs/header.JPG';
import Header from "../layout/header";
import './styles.scss';
import DefautlImage from '../../../assets/images/vasily.jpg'

const GALLERIES = [
    { image: DefautlImage }, { image: DefautlImage }, { image: DefautlImage }, { image: DefautlImage }, { image: DefautlImage }, { image: DefautlImage },
    { image: DefautlImage }, { image: DefautlImage }, { image: DefautlImage }, { image: DefautlImage }, { image: DefautlImage },
];

export default function Gallery() {
    return (
        <div>
            <Header BackgroundUrl={BackgroundUrl}>
                <div className="overlay">
                    <div className="border p-3 title">
                        <h1>Galerie</h1>
                    </div>
                </div>
            </Header>
            <section className='!px-10'>
                <div className='grid  grid-cols-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                    {
                        GALLERIES.map((img, index) => (
                            <div key={index} className='max-w-sm relative'>
                                <img src={img.image} alt='...' className='w-full rounded-lg'/>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}
