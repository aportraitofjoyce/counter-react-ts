import {Display} from "./Display";
import {Button} from "../Button";
import React from "react";

type CounterDisplayPropsType = {
    counter: number
    maxValue: number
    minValue: number
    setCounter: (counter: number) => void
    validation: () => boolean | undefined
}

export const CounterDisplay: React.FC<CounterDisplayPropsType> = (props) => {
    const counterIncrease = () => {
        props.counter < props.maxValue && props.setCounter(props.counter + 1)
    }

    const counterReset = () => {
        props.setCounter(props.minValue)
    }

    return (
        <div className="container">
            <Display counter={props.counter} maxValue={props.maxValue} validation={props.validation} minValue={props.minValue}/>
            <div className={'buttons'}>
                <Button name={'Increase'} callback={counterIncrease} disabled={props.counter === props.maxValue}/>
                <Button name={'Reset'} callback={counterReset} disabled={props.counter === props.minValue}/>
            </div>
        </div>
    )
}