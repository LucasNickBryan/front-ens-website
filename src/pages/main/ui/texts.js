import React from 'react'

export const SectionTitle = (props) => {
    const { title, mt } = props
    return (
        <div className={`flex justify-center !mt-[${ mt ?? '100px' }] !mb-5`}>
            <h2 className={`border bg-black opacity-80 text-white py-2 px-5`}>{title}</h2>
        </div>
    )
}
