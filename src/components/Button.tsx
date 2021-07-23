import React from "react";

type ButtonPropsType = {
    name: string
    callback: () => void
    disabled: any
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <button onClick={props.callback} disabled={props.disabled}>{props.name}</button>
    )
}