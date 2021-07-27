import {Button} from "../Button/Button";
import React from "react";
import {Link} from "react-router-dom";

type CounterDisplayPropsType = {
    counter: number
    maxValue: number
    minValue: number
    setCounter: (counter: number) => void
    inputValidation: boolean | undefined
    settings: boolean
}

export const DisplayCombined: React.FC<CounterDisplayPropsType> = (props) => {
    const counterIncrease = () => props.counter < props.maxValue && props.setCounter(props.counter + 1)
    const counterReset = () => props.setCounter(props.minValue)

    const increaseButtonDisable = props.counter === props.maxValue || !props.settings || props.inputValidation
    const resetButtonDisable = props.counter === props.minValue || !props.settings || props.inputValidation

    const displayClassName = props.counter === props.maxValue ? 'result maxResult' : 'result'

    return (
        <div className="container">
            <div className={'display'}>
                {props.inputValidation ? <span className={'result maxResult'}> Incorrect value! </span> :
                    !props.settings ? <span className={'result'}> Enter values and press 'Set' </span> :
                        <span className={displayClassName}>{props.counter}</span>}
            </div>

            <div className={'buttons'}>
                <Button name={'Increase'}
                        onClick={counterIncrease}
                        disabled={increaseButtonDisable}/>
                <Button name={'Reset'}
                        onClick={counterReset}
                        disabled={resetButtonDisable}/>

                <Link to={'/settings'}>
                    <Button name={'Set'}/>
                </Link>
            </div>
        </div>
    )
}