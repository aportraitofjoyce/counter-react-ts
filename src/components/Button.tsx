import React from "react";

type ButtonPropsType = {
    name: string
    callback: () => void
    disabled: boolean
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button onClick={props.callback} disabled={props.disabled}>{props.name}</button>
    )
}