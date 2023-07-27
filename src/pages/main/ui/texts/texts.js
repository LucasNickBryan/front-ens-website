import React from 'react'
import RightArrow from '../../../../assets/icons/angle-right.png'
import './styles.scss'
import { useNavigate } from 'react-router-dom'

export const SectionTitle = (props) => {
    const { title, mt, url } = props
    let navigate = useNavigate()

    return (
        <div className={`flex justify-center !mt-[${mt ?? '100px'}] !mb-5 SECTION_TITLE_STYLES`}>
            <h2 className={`bg-black opacity-80 text-white py-1 shadow px-4 cursor-pointer text-box`} onClick={()=>navigate(url)}>
                {title}
                <img src={RightArrow} alt='...' className='w-4 inline-block ml-2' />
            </h2>
        </div>
    )
}
