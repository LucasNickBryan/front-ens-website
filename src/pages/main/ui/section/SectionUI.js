import React from 'react'
import ActualityImage from '../../../../assets/images/pexells.jpg'
import HistoryImage from '../../../../assets/images/darya.jpg'
import Animation from '../../../ui/Animation';
import { IMAGE_PATH } from '../../../../config/modules';
import CarouselUI from '../carousel';

export const SectionContentUI = (props) => {
    const { isActuality, content, picture } = props;
    const { title, description, link, date } = content;

    return (
        <div className="grid grid-cols-2 md:grid-cols-1 !mb-32">
            {
                isActuality &&
                <Animation animate="fade-right" duration="1500">
                    <div className="opacity-90 hover:opacity-100 h-full w-full">
                        <CarouselUI path={IMAGE_PATH + "/pictures/images/"} images={picture} />
                    </div>
                </Animation>
            }
            <div className="relative pl-5 text-side shadow hh2_fr">
                <Animation animate={isActuality ? "fade-left" : "fade-right"}>
                    <div className="text-center pr-5">
                        <h2 className="border-b-2 border-redcolor uppercase text-redcolor">{title}</h2>
                    </div>
                    <div className="my-4 !pb-11" dangerouslySetInnerHTML={{ __html: description }} />
                    <div className="absolute bottom-0 left-0 flex justify-between sm:flex-col px-5 w-full">
                        <a className="!text-greencolor" target="_blanck" href={link}>voir plus</a>
                        <span className="font-bold">{date}</span>
                    </div>
                </Animation>
            </div>

            {
                !isActuality &&
                <Animation animate={!isActuality ? "fade-left" : "fade-right"}>
                    <div className="opacity-90 hover:opacity-100 h-full w-full">
                        <CarouselUI path={IMAGE_PATH + "/pictures/images/"} images={picture} />
                    </div>
                </Animation>
            }
        </div>
    )
}

SectionContentUI.defaultProps = {
    isActuality: true,
    picture: {},
    content: {
            title: "",
            description: "<p></p>",
            link: null,
            date: ""
    }
}