import React from 'react'

export const Input = (props) => {
    const { className, useDefaultClassname, onClick, onChange, value, type, checked } = props
    const default_classname = "w-full shadow-md border border-black-100 rounded p-1 mb-2"
    return (
        <input
            className={`${useDefaultClassname && default_classname} ${className}`}
            value={value}
            onChange={onChange}
            onClick={onClick}
            type={type}
            checked={checked}
        />
    )
}

Input.defaultProps = {
    useDefaultClassname:true,
    onChange: ()=>{},
    onClick: ()=>{},
    value:'',
    type:'text',
}