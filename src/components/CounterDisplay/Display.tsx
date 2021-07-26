import React from "react";

type DisplayPropsType = {
    counter: number
    maxValue: number
    minValue: number
    inputValidation: () => boolean | undefined
    settings: boolean
}

export const Display = (props: DisplayPropsType) => {
    const displayClassName = props.counter === props.maxValue ? 'result maxResult' : 'result'

    return (
        <div className={'display'}>
            {
                props.inputValidation() ? <span className={'result maxResult'}>Incorrect value!</span> :
                    !props.settings ? <span className={'result'}>Enter values and press 'Set'</span> :
                        <span className={displayClassName}>{props.counter}</span>
            }
        </div>
    )
}