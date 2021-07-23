import React, {ChangeEvent} from "react";
import {Button} from "../Button";
import {Input} from "../Input";

type CounterSettingsPropsType = {
    minValue: number
    maxValue: number
    setMinValue: (minValue: number) => void
    setMaxValue: (maxValue: number) => void
    setCounter: (counter: number) => void
    validation: () => boolean | undefined
}

export const CounterSettings: React.FC<CounterSettingsPropsType> = (props) => {
    const declareMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(Number(e.currentTarget.value))
    }

    const declareMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(Number(e.currentTarget.value))
    }

    const setMinValueToCounter = () => {
        props.setCounter(props.minValue)
    }

    return (
        <div className='container'>
            <div className={'settingsInputContainer'}>
                <span>Min value</span>
                <Input value={props.minValue}
                       onChange={declareMinValue}
                       error={props.validation()}
                />

            </div>

            <div className={'settingsInputContainer'}>
                <span>Max value</span>
                <Input value={props.maxValue}
                       onChange={declareMaxValue}
                       error={props.validation()}
                />

            </div>

            <div className={'buttons'}>
                <Button name={'Set'} callback={setMinValueToCounter} disabled={props.validation()}/>
            </div>
        </div>
    )
}

