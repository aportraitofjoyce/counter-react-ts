import React from "react";

type DisplayPropsType = {
    counter: number
    maxValue: number
    minValue: number
    validation: () => boolean | undefined
}

export const Display = (props: DisplayPropsType) => {
    const displayClassName = props.counter === props.maxValue ? 'result maxResult' : 'result'

    return (
        <div className={'display'}>
            {props.validation() ?
                <span className={'result'}>Incorrect value!</span> :
                <span className={displayClassName}>{props.counter}</span>
            }
        </div>
    )
}