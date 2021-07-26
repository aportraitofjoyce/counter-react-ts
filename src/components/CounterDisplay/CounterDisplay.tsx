import {Display} from "./Display";
import {Button} from "../Button";
import React from "react";

type CounterDisplayPropsType = {
    counter: number
    maxValue: number
    minValue: number
    setCounter: (counter: number) => void
    inputValidation: () => boolean | undefined
    settings: boolean
}

export const CounterDisplay: React.FC<CounterDisplayPropsType> = (props) => {
    const counterIncrease = () => {
        props.counter < props.maxValue && props.setCounter(props.counter + 1)
    }

    const counterReset = () => {
        props.setCounter(props.minValue)
    }

    const increaseButtonDisable = () => props.counter === props.maxValue || !props.settings
    const resetButtonDisable = () => props.counter === props.minValue || !props.settings

    return (
        <div className="container">
            <Display counter={props.counter}
                     maxValue={props.maxValue}
                     inputValidation={props.inputValidation}
                     minValue={props.minValue}
                     settings={props.settings}
            />

            <div className={'buttons'}>
                <Button name={'Increase'}
                        onClick={counterIncrease}
                        disabled={increaseButtonDisable()}/>
                <Button name={'Reset'}
                        onClick={counterReset}
                        disabled={resetButtonDisable()}/>
            </div>
        </div>
    )
}