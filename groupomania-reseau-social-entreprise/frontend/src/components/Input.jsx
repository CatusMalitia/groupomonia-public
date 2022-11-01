import React from 'react'

const Input = (props) => {
    return (
        <input
            type={props.type || 'text'}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            id={props.id}
            className={props.className}
            onBlur={props.onBlur}
            onChange={props.onChange}
        >
            {props.children}
        </input>
    )
}

export default Input
