import React, {ChangeEvent} from "react";

type InputPropsType = {
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    error: boolean | undefined
}

export const Input: React.FC<InputPropsType> = (props) => {
    const inputClassName = props.error ? 'error' : ''
    return <input type="number" value={props.value} onChange={props.onChange} className={inputClassName}/>
}