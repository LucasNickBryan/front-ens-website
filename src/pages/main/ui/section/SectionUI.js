import React from 'react'
import ActualityImage from '../../../../assets/images/pexells.jpg'
import HistoryImage from '../../../../assets/images/darya.jpg'

export const SectionContentUI = (props) => {
    const { isActuality } = props
    return (
        <div className="grid grid-cols-2 md:grid-cols-1 !mb-32">
            {
                isActuality &&
                <div className="opacity-90 hover:opacity-100">
                    <img src={ActualityImage} alt="..." className="rounded object-cover h-full" />
                </div>
            }

            <div className="relative pl-5 text-side shadow">
                <div className="text-center pr-5">
                    <h2 className="border-b-2 border-redcolor uppercase text-redcolor">titre de l'actualité</h2>
                </div>
                <div className="my-4 !pb-11">
                    lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum
                    lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum
                    lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum
                    lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum
                    lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum
                    lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum
                </div>
                <div className="absolute bottom-0 left-0 flex justify-between sm:flex-col px-5 w-full">
                    <a className="!text-greencolor" target="_blanck" href="">www.facebook.com/aeens</a>
                    <span className="font-bold">jeudi 08 juin 2023</span>
                </div>
            </div>

            {
                !isActuality &&
                <div className="opacity-90 hover:opacity-100">
                    <img src={HistoryImage} alt="..." className="rounded object-cover h-full" />
                </div>
            }
        </div>
    )
}

SectionContentUI.defaultProps = {
    isActuality: true,
}