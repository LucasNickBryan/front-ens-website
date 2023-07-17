import React from 'react'

export const Input = (props) => {
    const { className, useDefaultClassName, type, ...rest } = props
    const default_classname = "w-full shadow-md border border-black-100 rounded p-1 mb-2 focus:shadow-greencolor"
    return (
        <input
            className={`${useDefaultClassName && default_classname} ${className}`}
            type={type}
            {...rest}
        />
    )
}

Input.defaultProps = {
    useDefaultClassName:true,
    type:'text',
}