import React from "react";

type ButtonPropsType = {
    name: string
    onClick: () => void
    disabled: any
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <button onClick={props.onClick} disabled={props.disabled}>{props.name}</button>
    )
}