import React from 'react'
import ActualityImage from '../../../../assets/images/pexells.jpg'
import HistoryImage from '../../../../assets/images/darya.jpg'

export const SectionContentUI = (props) => {
    const { isActuality, content } = props;
    const { Picture, Content } = content;

    return (
        <div className="grid grid-cols-2 md:grid-cols-1 !mb-32">
            {
                isActuality &&
                <div className="opacity-90 hover:opacity-100">
                    <img src={Picture.image ?? ActualityImage} alt="..." className="rounded object-cover h-full" />
                </div>
            }

            <div className="relative pl-5 text-side shadow">
                <div className="text-center pr-5">
                    <h2 className="border-b-2 border-redcolor uppercase text-redcolor">{Content.title}</h2>
                </div>
                <div className="my-4 !pb-11" dangerouslySetInnerHTML={{ __html: Content.description }} />
                <div className="absolute bottom-0 left-0 flex justify-between sm:flex-col px-5 w-full">
                    <a className="!text-greencolor" target="_blanck" href="">{Content.link}</a>
                    <span className="font-bold">{Content.date}</span>
                </div>
            </div>

            {
                !isActuality &&
                <div className="opacity-90 hover:opacity-100">
                    <img src={Picture.image ?? HistoryImage} alt="..." className="rounded object-cover h-full" />
                </div>
            }
        </div>
    )
}

SectionContentUI.defaultProps = {
    isActuality: true,
    content:{
        Picture: {},
        Content: {
          title: "RÉCEPTION NOVICES l1",
          description: "<p> lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsumlorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsumlorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsumlorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsumlorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsumlorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum</p>",
          link: null,
          date: "2023"
        }
      }
}