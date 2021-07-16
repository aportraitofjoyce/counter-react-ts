import React from "react";

type DisplayPropsType = {
    counter: number
}

export const Display = (props: DisplayPropsType) => {
    const displayClassName = (
        props.counter === 1 ? 'result resultOne' :
            props.counter === 2 ? 'result resultTwo' :
                props.counter === 3 ? 'result resultThree' :
                    props.counter === 4 ? 'result resultFour' :
                        props.counter === 5 ? 'result maxResult' : 'result'
    )

    return (
        <div className={'display'}>
            <span className={displayClassName}>{props.counter}</span>
        </div>
    )
}