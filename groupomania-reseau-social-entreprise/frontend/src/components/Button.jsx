import React from 'react'

const Button = (props) => {
    return (
        <input
            type={props.type || 'button'}
            value={props.value}
            id={props.id}
            className={props.className}
            onClick={props.onClick}
        >
            {props.children}
        </input>
    )
}

export default Button
